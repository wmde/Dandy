import logger from './logger';
import config from '../config/global';
import { promises as fs } from 'fs';
import { dirname } from 'path';
import puppeteer from 'puppeteer';


class Dandy {

	baseUrl = '';
	browser = null;
	page = null;
	options = {};

	actions = [];

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
			await this.page.waitForSelector( selector, options );
			logger.logSuccess( `Found element (${ selector })` );
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

			if( elementText === text ) {
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
				await this.page.type( selector, value );
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

	delay( milliseconds ) {
		this.actions.push( async () => {
			logger.log( `Waiting for (${ milliseconds })` );
			await new Promise( resolve => setTimeout( resolve, milliseconds ) );
		} );
		return this;
	}

	async run() {
		this.browser = await puppeteer.launch( /*{ headless: false }*/ );
		this.page = await this.browser.newPage();
		await this.page.setViewport( { width: 1800, height: 1200 } );

		for( let i = 0; i < this.actions.length; i++ ) {
			try {
				await this.actions[i]();
			} catch( e ) {
				logger.logError( e );
				throw new Error( e );
			}
		}
	}
}

export default function ( baseUrl, options = {} ) {
	return new Dandy( baseUrl, options );
};
