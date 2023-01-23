import logger from './logger.js';
import config from '../config/global.js';
import { promises as fs } from 'fs';
import { dirname } from 'path';
import puppeteer from 'puppeteer';


class Dandy {

	baseUrl = '';

	/**
	 * @type puppeteer.Browser
	 */
	browser = null;

	/**
	 * @type puppeteer.Page
	 */
	page = null;
	options = {};
	actions = [];
	eventLog = [];
	consoleLog = [];

	constructor( baseUrl, options = {} ) {
		this.baseUrl = baseUrl;
		this.options = options;
	}

	url( page ) {
		return this.baseUrl + page;
	}

	goToPage( path ) {
		this.actions.push( async () => {
			const fullPath = this.url( path );
			try {
				logger.log( `Loading page (${ fullPath })` );
				await this.page.goto( fullPath );
			} catch( error ) {
				await Promise.reject( new Error( `Something went wrong loading (${ fullPath })` ) );
			}
		} );
		return this;
	}

	captureScreenshot( filename ) {
		this.actions.push( async () => {
			const fullFilePath = `${ config.screenshots_directory }/${ filename }`;
			logger.log( `Taking screenshot (${ filename })` );
			await fs.mkdir( dirname( fullFilePath ), { recursive: true } );
			await this.page.screenshot( { path: fullFilePath } );
		} );
		return this;
	}

	waitForElement( selector, options ) {
		this.actions.push( async () => {
			logger.log( `Waiting for element (${ selector })` );
			let start = new Date();
			await this.page.waitForSelector( selector, options );
			logger.logSuccess( `Found element (${ selector }) in (${ new Date() - start }) milliseconds` );
		} );
		return this;
	}

	checkElementExists( selector ) {
		this.actions.push( async () => {
			logger.log( `Looking for element (${ selector })` );
			const exists = await this.page.$( selector ) !== null;

			if( exists ) {
				logger.logSuccess( `Found element (${ selector })` );
			} else {
				await Promise.reject( new Error( `Could not find element (${ selector })` ) );
			}
		} );
		return this;
	}

	checkElementDoesNotExist( selector ) {
		this.actions.push( async () => {
			logger.log( `Making sure element (${ selector }) does not exist` );
			const exists = await this.page.$( selector ) !== null;

			if( exists ) {
				throw new Error( `Found element (${ selector })` );
			} else {
				logger.logSuccess( `Did not find element (${ selector })` );
			}
		} );
		return this;
	}

	checkElementContainsText( selector, text ) {
		this.actions.push( async () => {
			logger.log( `Checking that text in (${ selector }) is equal to (${ text })` );
			const elementText = await this.page.$eval( selector, element => element.innerText );

			if( elementText.replace(/\s+/g, ' ') === text.replace(/\s+/g, ' ') ) {
				logger.logSuccess( `Text in (${ selector }) is equal to (${ text })` );
			} else {
				await Promise.reject( new Error( `Text in ${ selector } (${ elementText }) is not equal to (${ text })` ) );
			}
		} );
		return this;
	}

	setInputText( selector, value ) {
		this.actions.push( async () => {
			logger.log( `Setting (${ selector }) value to (${ value })` );
			const exists = await this.page.$( selector ) !== null;

			if( exists ) {
				await this.page.$eval( selector, el => el.value = '' );
				await this.page.type( selector, value );
			} else {
				await Promise.reject( new Error( `Could not find element (${ selector })` ) );
			}
		} );
		return this;
	}

	selectOption( selector, option ) {
		this.actions.push( async () => {
			logger.log( `selecting (${ option }) on (${ selector })` );
			const exists = await this.page.$( selector ) !== null;

			if( exists ) {
				await this.page.select( selector, option );
			} else {
				await Promise.reject( new Error( `Could not find element (${ selector })` ) );
			}
		} );
		return this;
	}

	click( selector ) {
		this.actions.push( async () => {
			logger.log( `Clicking (${ selector })` );
			const exists = await this.page.$( selector ) !== null;

			if( exists ) {
				await this.page.click( selector );
			} else {
				await Promise.reject( new Error( `Could not find element (${ selector })` ) );
			}
		} );
		return this;
	}

	clickSubmit( selector ) {
		this.click( selector );
		this.actions.push( async () => {
			logger.log( 'Waiting for page load' );
			await this.page.waitForNavigation({ waitUntil: 'networkidle0' });
		} );
		return this;
	}

	blur( selector ) {
		this.actions.push( async () => {
			logger.log( `Clicking (${ selector })` );
			const element = await this.page.$( selector );

			if( element !== null ) {
				await element.blur();
				await this.page.click( selector );
			} else {
				await Promise.reject( new Error( `Could not find element (${ selector })` ) );
			}
		} );
		return this;
	}

	scrollIntoView( selector ) {
		this.actions.push( async () => {
			try {
				logger.log( `Scrolling into view` );
				await this.page.$eval(selector, (el) => el.scrollIntoView());

				logger.logSuccess( `Scrolled into the view successfully` );
			} catch( error ) {
				await Promise.reject( new Error( `Something went wrong while scrolling into view` ) );
			}
		} );
		return this;
	}

	wait( milliseconds ) {
		this.actions.push( async () => {
			logger.log( `Waiting for (${ milliseconds })` );
			await new Promise( resolve => setTimeout( resolve, milliseconds ) );
		} );
		return this;
	}

	hasCookie( cookieName ) {
		this.actions.push( async () => {
			logger.log( `looking for cookie (${ cookieName })` );
			const cookies = await this.page.cookies();
			if( cookies.find( x => x.name === cookieName ) ) {
				logger.logSuccess( `Cookie exists (${ cookieName })` );
			} else {
				await Promise.reject( new Error( `Could not find cookie (${ cookieName })` ) );
			}
		} );
		return this;
	}

	deleteCookies() {
		this.actions.push( async () => {
			const client = await this.page.target().createCDPSession();
			await client.send('Network.clearBrowserCookies');
			await client.send('Network.clearBrowserCache');
			const cookies = await this.page.cookies();
			if( cookies.length === 0 ) {
				logger.logSuccess( `Cookies deleted successfully` );
			} else {
				await Promise.reject( new Error( `These cookies still exist: (${ cookies })` ) );
			}
		} );
		return this;
	}

	eventWasLogged( eventName ) {
		this.actions.push( async () => {
			logger.log( `Looking for event (${ eventName })` );

			if( this.eventLog.find( x => x.event === eventName ) !== undefined ) {
				logger.logSuccess( `Event exists (${ eventName })` );
			} else {
				await Promise.reject( new Error( `Could not find event (${ eventName })` ) );
			}
		} );
		return this;
	}

	eventWasLoggedWithData( eventName, dataKey ) {
		this.actions.push( async () => {
			logger.log( `Looking for event (${ eventName }) with data (${ dataKey })` );
			const event = this.eventLog.find( x => x.event === eventName );

			if( event === undefined ) {
				await Promise.reject( new Error( `Could not find event (${ eventName })` ) );
			}

			if( event.data[ dataKey ] === undefined ) {
				await Promise.reject( new Error( `Could not find event data item (${ dataKey }) in (${ eventName })` ) );
			}

			logger.logSuccess( `Event exists (${ eventName }) with data (${ dataKey })` );
		} );
		return this;
	}

	reloadPage() {
		this.actions.push( async () => {
			try {
				logger.log( `Reloading page` );
				await this.page.reload( { waitUntil: [ "networkidle0", "domcontentloaded" ] } );
			} catch( error ) {
				await Promise.reject( new Error( `Something went wrong re-loading` ) );
			}
		} );
		return this;
	}

	showConsoleLog( filter ) {
		if ( !filter ) {
			filter = /.*/
		}
		this.actions.push( async () => {
			for ( let i = 0; i < this.consoleLog.length; i++ ) {
				const entry = this.consoleLog[i];
				if ( !entry.msg.match( filter ) ) {
					continue;
				}
				const args = await Promise.all( entry.args.map( arg => arg.jsonValue() ) );
				logger.logDebug( entry.msg, args )
			}
		} );
		return this;
	}

	logStep( message ) {
		this.actions.push( async () => {
			logger.logStep( message );
		});
	}

	setViewPort( width, height ) {
		this.actions.push( async () => {
			logger.log( `Setting viewport to ${ width }x${ height }` );
			return this.page.setViewport( { width, height } );
		});
	}

	checkElementValue( selector, value ) {
		this.actions.push( async () => {
			logger.log( `Looking for element (${ selector })` );
			const elementValue = await this.page.$eval( '[name="'+ selector +'"]', el => el.getAttribute( 'value' ) );

			if( elementValue === value ) {
				logger.logSuccess( `Element value is as expected` );
			} else {
				await Promise.reject( new Error( `Element value is NOT as expected` ) );
			}
		} );
		return this;
	}

	async run() {
		this.browser = await puppeteer.launch( this.options );
		this.page = await this.browser.newPage();

		this.page.on('console', message => this.consoleLog.push( { 
			msg: message.text().replace(/\s*JSHandle@(object|array)\s*/g,''), 
			args: message.args().slice(1) 
		} ) );

		if( this.options.requestLogger !== undefined ) {
			await this.page.setRequestInterception( true );
			this.page.on('request', async request => {
				const log = await this.options.requestLogger.log( request );
				if( log ) {
					this.eventLog.push( log );
				}
				await request.continue();
			} );
		}

		await this.page.setViewport( this.options.viewport !== undefined ? this.options.viewport : { width: 1800, height: 1200 } );

		for( let i = 0; i < this.actions.length; i++ ) {
			try {
				await this.actions[i]();
			} catch( e ) {
				logger.logError( e );
				break;
			}
		}

		await this.browser.close();
	}
}

export default function ( baseUrl, options = {} ) {
	return new Dandy( baseUrl, options );
};
