

// This test is redundant as I have merged it with : in_donation_form_when_user_solves_the_validation_error_red_markers_are_gone.js

import { amounts, intervals, paymentTypes } from "../config/banners.js";

export default class RedErrorMarkersAreShownWhenRespectiveFormFieldsAreNotFilledInFullPageDonationForm {

	description = 'On donation form, if a user misses filling out a field and clicks on submit: red error markers should be visible in the respective form section';

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMiniBannerActionButton()
			.waitForFollowupBanner()
			.clickAmount( amounts.one_hundred )
			.clickPaymentType( paymentTypes.paypal )
			.submitFullPageDonationForm()
			.checkIfMissingIntervalErrorMsgIsShown()
			.captureScreenshot( `banners/${ banner.getBannerName() }/fullpage_banner_interval_missing_red_marker.png` )

			.reload()
			.waitForBanner()
			.clickMiniBannerActionButton()
			.waitForFollowupBanner()
			.clickAmount( intervals.monthly )
			.clickPaymentType( paymentTypes.paypal )
			.submitFullPageDonationForm()
			.checkIfMissingIntervalErrorMsgIsShown()
			.captureScreenshot( `banners/${ banner.getBannerName() }/fullpage_banner_amount_missing_red_marker.png` )

			.reload()
			.waitForBanner()
			.clickMiniBannerButton()
			.waitForFollowupBanner()
			.clickAmount( amounts.one_hundred )
			.clickPaymentType( intervals.annually )
			.submitFullPageDonationForm()
			.checkIfMissingIntervalErrorMsgIsShown()
			.captureScreenshot( `banners/${ banner.getBannerName() }/fullpage_banner_payment_type_missing_red_marker.png` )
	}
}