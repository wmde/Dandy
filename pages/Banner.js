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

	clickUseOfFundsLink() {
		this.dandy.click( bannerConfig.selectors.use_of_funds.link );
		return this;
	}

	checkUseOfFundsIsVisible() {
		this.dandy.checkElementExists( bannerConfig.selectors.use_of_funds.modal_is_open );
		this.dandy.checkElementExists( bannerConfig.selectors.use_of_funds.modal_container );
		this.dandy.checkElementExists( bannerConfig.selectors.use_of_funds.elements.top_section );
		this.dandy.checkElementExists( bannerConfig.selectors.use_of_funds.elements.text );
		this.dandy.checkElementExists( bannerConfig.selectors.use_of_funds.elements.benefits_list );
		this.dandy.checkElementExists( bannerConfig.selectors.use_of_funds.elements.comparison );
		this.dandy.checkElementExists( bannerConfig.selectors.use_of_funds.elements.orgchart );
		this.dandy.checkElementExists( bannerConfig.selectors.use_of_funds.elements.orgchart_image );
		this.dandy.checkElementExists( bannerConfig.selectors.use_of_funds.elements.donate_button );
		return this;
	}

	checkIfActionButtonOnUOFLeadsToFullPageDonationForm() {
		this.dandy.click( bannerConfig.selectors.use_of_funds.elements.donate_button );
		this.dandy.checkElementDoesNotExist( bannerConfig.selectors.use_of_funds.modal_is_open );
		this.dandy.checkElementExists( bannerConfig.selectors.followup_banner.donation_form );
		return this;
	}
	waitForFollowupBanner() {
		this.dandy.waitForElement( bannerConfig.selectors.followup_banner.visible );
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
