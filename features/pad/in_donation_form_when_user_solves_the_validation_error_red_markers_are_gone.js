import {amounts, intervals, paymentTypes} from "../../config/banners.js";

export default class InDonationFormWhenUserSolvesTheValidationErrorRedMarkersAreGone {

	//On donation form, if a user misses filling out a field and clicks on submit: red error markers should be visible in the respective form section
	description = 'In donation form, if a user misses filling out a field and clicks on submit: red error markers should be visible in the respective form section. When the validation error is solved, the red error markers should be gone';

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickAmount( amounts.five )
			.clickPaymentType( paymentTypes.paypal )
			.submitFullPageDonationForm()
			.checkIfMissingIntervalErrorMsgIsShown()
			.captureScreenshot( `banners/${ banner.getBannerName() }/fullpage-banner_interval_missing_red_marker.png` )
			.clickInterval( intervals.monthly )
			.captureScreenshot( `banners/${ banner.getBannerName() }/donation_page_after_interval_missing_red_marker_solved.png` )

			.wait( 2000 )
			.reload()
			.waitForBanner()

			.clickAmount( amounts.one_hundred )
			.clickInterval( intervals.annually )
			.submitFullPageDonationForm()
			.checkIfMissingPaymentTypeErrorMsgIsShown()
			.captureScreenshot( `banners/${ banner.getBannerName() }/fullpage-banner_payment_type_missing_red_marker.png` )
			.clickPaymentType( paymentTypes.paypal )
			.captureScreenshot( `banners/${ banner.getBannerName() }/donation_page_after_payment_type_missing_red_marker_solved.png` )

			.wait( 2000 )
			.reload()
			.waitForBanner()

			.clickInterval( intervals.single_payment )
			.clickPaymentType( paymentTypes.paypal )
			.submitFullPageDonationForm()
			.checkIfMissingAmountErrorMsgIsShown()
			.captureScreenshot( `banners/${ banner.getBannerName() }/fullpage-banner_amount_missing_red_marker.png` )
			.clickAmount( amounts.twenty_five )
			.captureScreenshot( `banners/${ banner.getBannerName() }/donation_page_after_amount_missing_red_marker_solved.png` )
	}
}