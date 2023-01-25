import createDandy from '../src/Dandy.js';
import config from '../config/global.js';

export default class Page {
	dandy;
	parameters;

	constructor( parameters = {}, dandy = null ) {
		this.dandy = dandy || createDandy( config.test_url );
		this.parameters = new URLSearchParams( parameters );
	}

	acceptCookies() {
		this.dandy.waitForElement( '.cookie-notice' )
			.click( '.cookie-notice-button.accept' )
			.wait( 1000 );
		return this;
	}

	captureScreenshot( filename ) {
		this.dandy.captureScreenshot( filename );
		return this;
	}

	wait( milliseconds ) {
		this.dandy.wait( milliseconds );
		return this;
	}

	async run() {
		await this.dandy.run();
	}

}
