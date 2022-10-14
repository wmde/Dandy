import Banner from './Banner.js';
import { bannerConfig } from '../config/banners.js';

export default class MobileBanner extends Banner {
	selectors;

	constructor( url, selectors, parameters = {}, options = {}  ) {
		super( url, parameters, options );
		this.selectors = selectors;

		this.dandy.goToPage( '?' + this.parameters.toString() );
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
