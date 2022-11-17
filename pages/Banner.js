import createDandy from '../src/Dandy.js';
import { bannerConfig } from '../config/banners.js';

export default class Banner {
	dandy;
	parameters;
	selectors;

	constructor( url, selectors, parameters = {}, options = {}  ) {
		this.dandy = createDandy( url, options );
		this.parameters = new URLSearchParams( parameters );
		this.selectors = selectors;

		this.dandy.goToPage( '?' + this.parameters.toString() );
	}

	waitForBanner() {
		this.dandy.waitForElement( bannerConfig.selectors.banner_visible, { timeout: 10000 } );
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

	clickMiniBannerCloseButton() {
		this.dandy.click( bannerConfig.selectors.close_button.mini );
		return this;
	}

	clickMiniBannerButton() {
		this.dandy.click( bannerConfig.selectors.submit_button.mini );
		return this;
	}

	waitForFollowupBanner() {
		this.dandy.waitForElement( bannerConfig.selectors.followup_visible );
		return this;
	}

	clickPaymentTypeSofortButton() {
		this.dandy.click( bannerConfig.selectors.donation_form.payment_type.sofort );
		return this;
	}

	checkIntervalMonthlyIsDisabled() {
		this.dandy.checkElementExists( bannerConfig.selectors.donation_form.interval.disabled.monthly );
		return this;
	}

	checkIntervalMonthlyIsEnabled() {
		this.dandy.checkElementDoesNotExist( bannerConfig.selectors.donation_form.interval.disabled.monthly );
		return this;
	}

	checkIntervalYearlyIsDisabled() {
		this.dandy.checkElementExists( bannerConfig.selectors.donation_form.interval.disabled.yearly );
		return this;
	}

	checkBannerIsHidden() {
		this.dandy.checkElementExists( bannerConfig.selectors.banner_hidden );
		return this;
	}
}
