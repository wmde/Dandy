import createDandy from '../src/Dandy.js';
import { wporgRequestLogger } from '../src/wporg_request_logger.js';

export default class Banner {
	/**
	 * @type { Dandy }
	 */
	dandy;

	parameters;

	selectors;

	defaultViewPort;

	constructor( url, selectors, parameters = {}, options = {} ) {
		this.dandy = createDandy( url, Object.assign( options, { requestLogger: wporgRequestLogger } ) );
		this.parameters = new URLSearchParams( parameters );
		this.selectors = selectors;
		this.defaultViewPort = options.viewport;

		this.dandy.goToPage( '?' + this.parameters.toString() );
	}

	resetEnvironment() {
		this.resetViewPort();
		this.dandy.goToPage( '?' + this.parameters.toString() );
		this.dandy.wait( 2000 ); // wait for cookies to get set successfully
		this.dandy.deleteCookies();
		this.dandy.reloadPage();
		return this;
	}

	getBannerName() {
		if ( this.parameters.has( 'devbanner' ) ) {
			return this.parameters.get( 'devbanner' );
		}
		return this.parameters.get( 'banner' );
	}

	checkIfInDevEnvironment() {
		return this.parameters.has( 'devbanner' );
	}

	checkIfMainBannerHasAnimatedTextHighlight() {
		this.dandy.waitForElement( this.selectors.animated_text_highlight.main_slider, { timeout: 200 } );
		this.dandy.scrollDownOneWindow( this.selectors.animated_text_highlight.main_slider );
		return this;
	}

	checkIfFullPageBannerHasAnimatedTextHighlight() {
		this.dandy.waitForElement( this.selectors.animated_text_highlight.full, { timeout: 200 } );
		return this;
	}

	clickFullBannerCloseButton() {
		this.dandy.waitForElement( this.selectors.close_button.full, { timeout: 200 } );
		this.dandy.click( this.selectors.close_button.full );
		return this;
	}

	checkPaymentTypeSofortIsDisabled() {
		this.dandy.waitForElement( this.selectors.donation_form.payment_type.disabled.sofort, { timeout: 200 } );
		return this;
	}

	submitFullPageDonationForm() {
		this.dandy.waitForElement( this.selectors.submit_button.form, { timeout: 200 } );
		this.dandy.click( this.selectors.submit_button.form );
		return this;
	}

	submitFullPageDonationFormAnnualUpgradeChoice() {
		this.dandy.waitForElement( this.selectors.submit_button.annual_upgrade_choice, { timeout: 200 } );
		this.dandy.click( this.selectors.submit_button.annual_upgrade_choice );
		return this;
	}

	submitFullPageDonationFormCustomAmount() {
		this.dandy.waitForElement( this.selectors.submit_button.custom_amount, { timeout: 200 } );
		this.dandy.click( this.selectors.submit_button.custom_amount );
		return this;
	}

	clickAnnualUpgradeOption( choice ) {
		this.dandy.waitForElement( this.selectors.donation_form.upgrade_option_annually[ choice ], { timeout: 200 } );
		this.dandy.click( this.selectors.donation_form.upgrade_option_annually[ choice ] );
		return this;
	}

	clickContactDetailsOption( choice ) {
		this.dandy.waitForElement( this.selectors.donation_form.contactDetails[ choice ], { timeout: 200 } );
		this.dandy.click( this.selectors.donation_form.contactDetails[ choice ] );
		return this;
	}

	enterAnnualUpgradeOptionCustomAmount( amount ) {
		this.dandy.waitForElement( this.selectors.donation_form.upgrade_option_annually.enter_custom_amount, { timeout: 200 } );
		this.dandy.setInputText( this.selectors.donation_form.upgrade_option_annually.enter_custom_amount, amount );
		return this;
	}

	checkIfMissingAnnualUpgradeChoiceErrorMsgIsShown() {
		this.dandy.waitForElement( this.selectors.donation_form.upgrade_option_annually.error_msg_container, { timeout: 200 } );
		this.dandy.waitForElement( this.selectors.banner_error_msg, { timeout: 200 } );
		return this;
	}

	checkIfMissingCustomAmountErrorMsgIsShown() {
		this.dandy.waitForElement( this.selectors.donation_form.upgrade_option_annually.error_msg_container, { timeout: 200 } );
		this.dandy.waitForElement( this.selectors.banner_error_msg, { timeout: 200 } );
		return this;
	}

	checkIfMissingIntervalErrorMsgIsShown() {
		this.dandy.waitForElement( this.selectors.donation_form.interval.error_msg_container, { timeout: 200 } );
		this.dandy.waitForElement( this.selectors.banner_error_msg, { timeout: 200 } );
		return this;
	}

	checkIfMissingAmountErrorMsgIsShown() {
		this.dandy.waitForElement( this.selectors.donation_form.amount.error_msg_container, { timeout: 200 } );
		this.dandy.waitForElement( this.selectors.banner_error_msg, { timeout: 200 } );
		return this;
	}

	checkIfMissingPaymentTypeErrorMsgIsShown() {
		this.dandy.waitForElement( this.selectors.donation_form.payment_type.error_msg_container, { timeout: 200 } );
		this.dandy.waitForElement( this.selectors.banner_error_msg, { timeout: 200 } );
		return this;
	}

	setViewPort( width, height ) {
		this.dandy.setViewPort( width, height );
		return this;
	}

	resetViewPort() {
		return this.setViewPort( this.defaultViewPort.width, this.defaultViewPort.height );
	}

	waitForBanner() {
//		this.dandy.waitForElement( this.selectors.banner_visible, { timeout: 10000 } );
		this.dandy.waitForElement( this.selectors.banner_visible, { timeout: 15000 } );
		return this;
	}

	waitForMicroBanner() {
		this.dandy.waitForElement( this.selectors.banner_soft_close );
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

	clickMainBannerCloseButton() {
		this.dandy.waitForElement( this.selectors.close_button.main, { timeout: 10000 } );
		this.dandy.click( this.selectors.close_button.main );
		return this;
	}

	clickMicroBannerCloseButton() {
		this.dandy.waitForElement( this.selectors.soft_close.close_button, { timeout: 10000 } );
		this.dandy.click( this.selectors.soft_close.close_button );
		return this;
	}

	clickMicroBannerMaybeLaterButton() {
		this.dandy.waitForElement( this.selectors.soft_close.maybe_later_button, { timeout: 10000 } );
		this.dandy.click( this.selectors.soft_close.maybe_later_button );
		return this;
	}

	clickMainBannerActionButton() {
//		this.dandy.waitForElement( this.selectors.submit_button.main, { timeout: 10000 } );
		this.dandy.waitForElement( this.selectors.submit_button.main, { timeout: 15000 } );
		this.dandy.click( this.selectors.submit_button.main );
		return this;
	}

	waitForFollowupBanner() {
		this.dandy.waitForElement( this.selectors.followup_visible );
		return this;
	}

	clickInterval( interval ) {
		this.dandy.waitForElement( this.selectors.donation_form.interval[ interval ], { timeout: 10000 } );
		this.dandy.click( this.selectors.donation_form.interval[ interval ] );
		return this;
	}

	clickPaymentType( paymentType ) {
		this.dandy.waitForElement( this.selectors.donation_form.payment_type[ paymentType ], { timeout: 10000 } );
		this.dandy.click( this.selectors.donation_form.payment_type[ paymentType ] );
		return this;
	}

	clickAmount( amount ) {
		this.dandy.waitForElement( this.selectors.donation_form.amount[ amount ], { timeout: 10000 } );
		this.dandy.click( this.selectors.donation_form.amount[ amount ] );
		return this;
	}

	checkIntervalMonthlyIsDisabled() {
		this.dandy.waitForElement( this.selectors.donation_form.interval.disabled.monthly, { timeout: 200 } );
		return this;
	}

	checkIntervalMonthlyIsEnabled() {
		this.dandy.checkElementDoesNotExist( this.selectors.donation_form.interval.disabled.monthly );
		return this;
	}

	checkIntervalYearlyIsDisabled() {
		this.dandy.waitForElement( this.selectors.donation_form.interval.disabled.yearly, { timeout: 200 } );
		return this;
	}

	checkBannerIsHidden() {
//		this.dandy.waitForElement( this.selectors.banner_hidden, { timeout: 200 } );
//		this.dandy.waitForElement( this.selectors.banner_hidden, { timeout: 20000 } );
		this.dandy.checkElementDoesNotExist( this.selectors.banner_visible );
		return this;
	}

	checkCookieExists( cookieName ) {
		this.dandy.hasCookie( cookieName );
		return this;
	}

	submitForm() {
		this.dandy.waitForElement( this.selectors.submit_button.form, { timeout: 200 } );
		this.dandy.click( this.selectors.submit_button.form );
		return this;
	}

	submitFormStep1() {
		this.dandy.waitForElement( this.selectors.submit_button.form_step_1, { timeout: 200 } );
		this.dandy.click( this.selectors.submit_button.form_step_1 );
		return this;
	}

	submitFormStep2() {
		this.dandy.waitForElement( this.selectors.submit_button.form_step_2, { timeout: 200 } );
		this.dandy.click( this.selectors.submit_button.form_step_2 );
		return this;
	}

	checkEventWasFired( event ) {
		this.dandy.eventWasLogged( event );
		return this;
	}

	checkEventContainsDataKey( event, dataKey ) {
		this.dandy.eventWasLoggedWithData( event, dataKey );
		return this;
	}

	clickUseOfFundsLink() {
		this.dandy.waitForElement( this.selectors.use_of_funds_link, { timeout: 200 } );
		this.dandy.scrollDownOneWindow( this.selectors.use_of_funds_link );
		this.dandy.wait( 2000 );
		this.dandy.click( this.selectors.use_of_funds_link );
		return this;
	}

	clickUseOfFundsCallToAction() {
		this.dandy.waitForElement( this.selectors.use_of_funds.call_to_action, { timeout: 200 } );
		this.dandy.click( this.selectors.use_of_funds.call_to_action );
		return this;
	}

	checkUseOfFundsIsVisible() {
		this.dandy.waitForElement( this.selectors.use_of_funds.modal_container, { timeout: 1000 } );
		return this;
	}

	clickUseOfFundsActionButton() {
		this.dandy.waitForElement( this.selectors.use_of_funds.call_to_action, { timeout: 1000 } );
		this.dandy.click( this.selectors.use_of_funds.call_to_action );
		return this;
	}

	reload() {
		this.dandy.reloadPage();
		return this;
	}

	showConsoleLog( filter ) {
		this.dandy.showConsoleLog( filter );
		return this;
	}

	markStepAsSkipped( message ) {
		this.dandy.logStep( message );
		return this;
	}

	clickPaymentTypeSofortButton() {
		this.dandy.waitForElement( this.selectors.donation_form.payment_type.sofort, { timeout: 200 } );
		this.dandy.click( this.selectors.donation_form.payment_type.sofort );
		return this;
	}

	checkSliderIsDisplayedOnSmallViewPort() {
		this.dandy.checkElementDoesNotExist( this.selectors.message.big_viewport );
		this.dandy.waitForElement( this.selectors.message.small_viewport, { timeout: 200 } );
		return this;
	}

	checkSlidesAreSlidingInSlider() {
		this.wait( 2000 );
		this.dandy.waitForElement( this.selectors.slider.first_slide, { timeout: 200 } );
		this.wait( 10000 );
		this.dandy.waitForElement( this.selectors.slider.next_slide, { timeout: 200 } );
		this.dandy.click( this.selectors.slider.next_button );
		this.wait( 2000 );
		this.dandy.click( this.selectors.slider.back_button );
		this.wait( 2000 );
		return this;
	}
}
