import { promises as fs } from 'fs';
import { dirname } from 'path';
import puppeteer from 'puppeteer';
import logger from './logger';
import config from '../config/global';

let baseUrl = '';
let browser = null;
let page = null;

const url = page => {
	return baseUrl + page;
}

function goToPage( path ) {
	const inputObservable = this;
	return createObservable( outputObservable => {
		const fullPath = url( path );
		inputObservable.subscribe( createObserver( outputObservable, async () => {
			try {
				logger.log( `Loading page (${ fullPath })` );
				await page.goto( fullPath );
				await outputObservable.next();
			} catch( error ) {
				outputObservable.error( `Something went wrong loading (${ fullPath })` );
			}
		} ) );
	} );
}

function captureScreenshot( filename ) {
	const inputObservable = this;
	return createObservable( outputObservable => {
		const fullFilePath = `${ config.screenshots_directory }/${ filename }`;
		inputObservable.subscribe( createObserver( outputObservable, async () => {
			try {
				logger.log( `Taking screenshot (${ filename })` );
				await fs.mkdir( dirname( fullFilePath ), { recursive: true } );
				await page.screenshot( { path: fullFilePath } );
				await outputObservable.next();
			} catch( error ) {
				outputObservable.error( error );
			}
		} ) );
	} );
}

function waitForElement( selector, options ) {
	const inputObservable = this;
	return createObservable( outputObservable => {
		inputObservable.subscribe( createObserver( outputObservable, async () => {
			try {
				logger.log( `Waiting for element (${ selector })` );
				await page.waitForSelector( selector, options );
				logger.logSuccess( `Found element (${ selector })` );
				await outputObservable.next();
			} catch( error ) {
				outputObservable.error( `Could not find element (${ selector })` );
			}
		} ) );
	} );
}

function checkElementExists( selector ) {
	const inputObservable = this;
	return createObservable( outputObservable => {
		inputObservable.subscribe( createObserver( outputObservable, async () => {
			try {
				logger.log( `Looking for element (${ selector })` );
				const exists = await page.$( selector ) !== null;

				if( exists ) {
					logger.logSuccess( `Found element (${ selector })` );
					await outputObservable.next();
				} else {
					outputObservable.error( `Could not find element (${ selector })` );
				}

			} catch( error ) {
				outputObservable.error( error );
			}
		} ) );
	} );
}

function checkElementDoesNotExist( selector ) {
	const inputObservable = this;
	return createObservable( outputObservable => {
		inputObservable.subscribe( createObserver( outputObservable, async () => {
			try {
				logger.log( `Making sure element (${ selector }) does not exist` );
				const exists = await page.$( selector ) !== null;

				if( exists ) {
					outputObservable.error( `Found element (${ selector })` );
				} else {
					logger.logSuccess( `Did not find element (${ selector })` );
					await outputObservable.next();
				}

			} catch( error ) {
				outputObservable.error( error );
			}
		} ) );
	} );
}

function checkElementContainsText( selector, text ) {
	const inputObservable = this;
	return createObservable( outputObservable => {
		inputObservable.subscribe( createObserver( outputObservable, async () => {
			logger.log( `Checking that text in (${ selector }) is equal to (${ text })` );
			try {
				const elementText = await page.$eval( selector, element => element.innerText );

				if( elementText === text ) {
					logger.logSuccess( `Text in (${ selector }) is equal to (${ text })` );
					await outputObservable.next();
				} else {
					outputObservable.error( `Text in ${ selector } (${ elementText }) is not equal to (${ text })` );
				}
			} catch( error ) {
				outputObservable.error( error );
			}
		} ) );
	} );
}

function setInputText( selector, value ) {
	const inputObservable = this;
	return createObservable( outputObservable => {
		inputObservable.subscribe( createObserver( outputObservable, async () => {
			try {
				logger.log( `Setting (${ selector }) value to (${ value })` );
				const exists = await page.$( selector ) !== null;

				if( exists ) {
					await page.type( selector, value );
					await outputObservable.next();
				} else {
					outputObservable.error( `Could not find element (${ selector })` );
				}

			} catch( error ) {
				outputObservable.error( error );
			}
		} ) );
	} );
}

function click( selector ) {
	const inputObservable = this;
	return createObservable( outputObservable => {
		inputObservable.subscribe( createObserver( outputObservable, async () => {
			try {
				logger.log( `Clicking (${ selector })` );
				const exists = await page.$( selector ) !== null;

				if( exists ) {
					await page.click( selector );
					await outputObservable.next();
				} else {
					outputObservable.error( `Could not find element (${ selector })` );
				}

			} catch( error ) {
				outputObservable.error( error );
			}
		} ) );
	} );
}

function blur( selector ) {
	const inputObservable = this;
	return createObservable( outputObservable => {
		inputObservable.subscribe( createObserver( outputObservable, async () => {
			try {
				logger.log( `Clicking (${ selector })` );
				const element = await page.$( selector );

				if( element !== null ) {
					await element.blur();
					await this.page.click( selector );
					await outputObservable.next();
				} else {
					outputObservable.error( `Could not find element (${ selector })` );
				}

			} catch( error ) {
				outputObservable.error( error );
			}
		} ) );
	} );
}

function delay( milliseconds ) {
	const inputObservable = this;
	return createObservable( outputObservable => {
		inputObservable.subscribe( createObserver( outputObservable, async () => {
			try {
				logger.log( `Waiting for (${ milliseconds })` );
				await new Promise( resolve => setTimeout( resolve, milliseconds ) );
			} catch( error ) {
				outputObservable.error( error );
			}
		} ) );
	} );
}

/**
 * This is a utility function and is used because all observers
 * have the same methods for passing errors and completions through the chain
 *
 * @param observable
 * @param next
 * @returns {{next: (function(): Promise<void>), error: (function(*=): *), complete: (function(): *)}}
 */
function createObserver( observable, next ) {
	return {
		next: next,
		error: error => observable.error( error ),
		complete: () => observable.complete()
	}
}

function createObservable( subscribe ) {
	return {
		subscribe,
		goToPage,
		captureScreenshot,
		waitForElement,
		checkElementExists,
		checkElementDoesNotExist,
		checkElementContainsText,
		setInputText,
		click,
		blur,
		delay
	};
}

const createDandy = async ( atBaseUrl ) => {
	baseUrl = atBaseUrl;
	browser = await puppeteer.launch( /*{ headless: false }*/ );
	page = await browser.newPage();
	await page.setViewport( { width: 1800, height: 1200 } );

	return createObservable( async ( observer ) => {
		await observer.next();
		await browser.close();
		observer.complete();
	} );
}

export default createDandy;