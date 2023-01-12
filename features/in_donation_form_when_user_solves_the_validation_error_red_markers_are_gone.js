export default class InDonationFormWhenUserSolvesTheValidationErrorRedMarkersAreGone {

	description = 'If a user causes a validation error and solves it, clicks on submit: the red error markers should be gone again';

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
			.captureScreenshot( `banners/${ banner.getBannerName() }/fullpage-banner_interval_missing_red_marker.png` )
			.clickInterval( intervals.monthly )
			.submitFullPageDonationForm()

			.wait( 3000 )
	}
}