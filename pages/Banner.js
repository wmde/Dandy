import createDandy from '../src/Dandy.js';
import { wporgRequestLogger } from '../src/wporg_request_logger.js';

export default class Banner {
	/**
	 * @type Dandy
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

	resetEnvironment(){
		this.resetViewPort();
		this.dandy.goToPage( '?' + this.parameters.toString() );
		this.dandy.deleteCookies();
		this.dandy.reloadPage();
		return this;
	}

	getBannerName() {
		if( this.parameters.has( 'devbanner' ) ) {
			return this.parameters.get( 'devbanner' );
		}
		return this.parameters.get( 'banner' );
	}

	checkIfInDevEnvironment() {
		return this.parameters.has( 'devbanner' );
	}

	checkIfMiniBannerHasAnimatedTextHighlight() {
		this.dandy.checkElementExists( this.selectors.animated_text_highlight.mini_slider );
		this.dandy.scrollIntoView( this.selectors.animated_text_highlight.mini_slider );
		return this;
	}

	checkIfFullPageBannerHasAnimatedTextHighlight() {
		this.dandy.checkElementExists( this.selectors.animated_text_highlight.full );
		return this;
	}

	clickFullBannerCloseButton() {
		this.dandy.click( this.selectors.close_button.full );
		return this;
	}

	checkPaymentTypeSofortIsDisabled() {
		this.dandy.checkElementExists( this.selectors.donation_form.payment_type.disabled.sofort );
		return this;
	}

	submitFullPageDonationForm() {
		this.dandy.click( this.selectors.submit_button.form );
		return this;
	}

	submitFullPageDonationForm2() {
		this.dandy.click( this.selectors.submit_button.step_two );
		return this;
	}

	submitFullPageDonationFormCustomAmount() {
		this.dandy.click( this.selectors.submit_button.custom_amount );
		return this;
	}

	clickAnnualUpgradeOption( choice ){
		this.dandy.click( this.selectors.donation_form.upgrade_option_annually[ choice ] );
		return this;
	}

	clickContactDetailsOption( choice ){
		this.dandy.click( this.selectors.donation_form.upgrade_option_annually[ choice ] );
		return this;
	}

	clickAnnualUpgradeOptionCustomAmount( amount ){
		// this.dandy.click( this.selectors.donation_form.upgrade_option_annually.custom_amount );
		// this.dandy.wait( 2000 ); //wait for the second page form to appear
		this.dandy.fillInTextBox( this.selectors.donation_form.upgrade_option_annually.enter_custom_amount, amount );
		return this;
	}

	checkIfMissingIntervalErrorMsgIsShown() {
		this.dandy.checkElementExists( this.selectors.donation_form.interval.error_msg_container );
		this.dandy.checkElementExists( this.selectors.banner_error_msg );
		//this.dandy.scrollIntoView( this.selectors.close_button.full );
		return this;
	}

	checkIfMissingAmountErrorMsgIsShown() {
		this.dandy.checkElementExists( this.selectors.donation_form.amount.error_msg_container );
		this.dandy.checkElementExists( this.selectors.banner_error_msg );
		//this.dandy.scrollIntoView( this.selectors.close_button.full );
		return this;
	}

	checkIfMissingPaymentTypeErrorMsgIsShown() {
		this.dandy.checkElementExists( this.selectors.donation_form.payment_type.error_msg_container );
		this.dandy.checkElementExists( this.selectors.banner_error_msg );
		//this.dandy.scrollIntoView( this.selectors.close_button.full );
		return this;
	}

	setViewPort( width, height ) {
		this.dandy.setViewPort( width, height )
		return this;
	}

	resetViewPort() {
		return this.setViewPort( this.defaultViewPort.width, this.defaultViewPort.height );
	}

	waitForBanner() {
		this.dandy.waitForElement( this.selectors.banner_visible, { timeout: 50000 } );//10000
		return this;
	}

	waitForBannerWPDE() {
		this.dandy.waitForElement( this.selectors.banner_visible_wpde, { timeout: 10000 } );
		return this;
	}

	waitForSoftClose() {
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
		this.dandy.click( this.selectors.close_button.main );
		return this;
	}

	// clickMainBannerCloseButton() {
	// 	this.wait( 3000 )
	// 	this.dandy.click( this.selectors.close_button.mini );
	// 	return this;
	// }

	clickSoftCloseCloseButton() {
		this.dandy.click( this.selectors.soft_close.close_button );
		return this;
	}

	clickSoftCloseMaybeLaterButton() {
		this.dandy.click( this.selectors.soft_close.maybe_later_button );
		return this;
	}

	clickMiniBannerActionButton() {
		this.dandy.click( this.selectors.submit_button.mini );
		return this;
	}

	waitForFollowupBanner() {
		this.dandy.waitForElement( this.selectors.followup_visible );
		return this;
	}

	clickInterval( interval ) {
		this.dandy.click( this.selectors.donation_form.interval[ interval ] );
		return this;
	}

	clickPaymentType( paymentType ) {
		this.dandy.click( this.selectors.donation_form.payment_type[ paymentType ] );
		return this;
	}

	clickAmount( amount ) {
		this.dandy.click( this.selectors.donation_form.amount[ amount ] );
		return this;
	}

	checkIntervalMonthlyIsDisabled() {
		this.dandy.checkElementExists( this.selectors.donation_form.interval.disabled.monthly );
		return this;
	}

	checkIntervalMonthlyIsEnabled() {
		this.dandy.checkElementDoesNotExist( this.selectors.donation_form.interval.disabled.monthly );
		return this;
	}

	checkIntervalYearlyIsDisabled() {
		this.dandy.checkElementExists( this.selectors.donation_form.interval.disabled.yearly );
		return this;
	}

	checkBannerIsHidden() {
		this.dandy.checkElementExists( this.selectors.banner_hidden );
		return this;
	}

	checkCookieExists( cookieName ) {
		this.dandy.hasCookie( cookieName );
		return this;
	}

	submitForm() {
		this.dandy.click( this.selectors.submit_button.form );
		return this;
	}

	submitFormStep1() {
		this.dandy.click( this.selectors.submit_button.form_step_1 );
		return this;
	}

	submitFormStep2() {
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
		this.dandy.click( this.selectors.use_of_funds.link );
		return this;
	}

	clickUseOfFundsCallToAction() {
		this.dandy.click( this.selectors.use_of_funds.call_to_action );
		return this;
	}

	checkUseOfFundsIsVisible() {
		this.dandy.checkElementExists( this.selectors.use_of_funds.modal_is_open );
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
		this.dandy.click( this.selectors.donation_form.payment_type.sofort );
		return this;
	}

	checkSliderIsDisplayedOnSmallViewPort() {
		this.dandy.checkElementDoesNotExist( this.selectors.message.big_viewport );
		this.dandy.checkElementExists( this.selectors.message.small_viewport );
		return this;
	}

	checkSlidesAreSlidingInSlider() {
		this.wait( 2000 )
		this.dandy.checkElementExists( this.selectors.slider.first_slide );
		this.wait( 10000 )
		this.dandy.checkElementExists( this.selectors.slider.next_slide );
		this.dandy.click( this.selectors.slider.next_button );
		this.wait( 2000 )
		this.dandy.click( this.selectors.slider.back_button );
		this.wait( 2000 )
		return this;
	}
}
