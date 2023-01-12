export default class RedErrorMarkersAreShownWhenRespectiveFormFieldsAreNotFilledInFullPageDonationForm {

	description = 'On donation form, if a user misses filling out a field and clicks on submit: red error markers should be visible in the respective form section';

	/**
	 *
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMiniBannerButton()
			.waitForFollowupBanner()
			.clickAmount( amounts.one_hundred )
			.clickPaymentType( paymentTypes.paypal )
			.submitFullPageDonationForm()
			.checkIfMissingIntervalErrorMsgIsShown()
			.captureScreenshot( `banners/${ banner.getBannerName() }/fullpage_banner_interval_missing_red_marker.png` )
	}
}