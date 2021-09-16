import createDandy from '../src/Dandy';
import config from '../config/global';

export default class Page {
	dandy;

	constructor() {
		this.dandy = createDandy( config.test_url );
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
