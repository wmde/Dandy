import createDandy from '../src/Dandy.js';
import { bannerConfig } from '../config/banners.js';

export default class Banner {
	dandy;
	parameters;

	constructor( url, parameters = {} ) {
		this.dandy = createDandy( url );
		this.parameters = new URLSearchParams( parameters );
	}

	waitForBanner() {
		this.dandy.waitForElement( bannerConfig.banner_visible_class, { timeout: 10000 } );
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
