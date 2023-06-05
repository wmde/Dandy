import { amounts, intervals, paymentTypes, upgradeOptions } from '../../config/banners.js';

export default {

	description: 'In donation form, if a user misses filling out a field and clicks on submit: red error markers' +
		'should be visible in the respective form section. When the validation error is solved, the red error markers' +
		'should be gone',

	steps: function ( banner ) {
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

			.wait( 2000 )
			.reload()
			.waitForBanner()

			.clickInterval( intervals.single_payment )
			.clickPaymentType( paymentTypes.paypal )
			.clickAmount( amounts.twenty_five )
			.submitFullPageDonationForm()
			.wait( 2000 )

			.clickAnnualUpgradeOption( upgradeOptions.custom_amount )

			.wait( 2000 )
			.submitFullPageDonationFormCustomAmount()
			.checkIfMissingCustomAmountErrorMsgIsShown()
			.captureScreenshot( `banners/${ banner.getBannerName() }/donation_page_annual_upgrade_choice_missing_custom_amount_red_marker.png` )
			.wait( 500 )
			.enterAnnualUpgradeOptionCustomAmount( '5' )
			.captureScreenshot( `banners/${ banner.getBannerName() }/donation_page_after_annual_upgrade_choice_missing_custom_amount_red_marker_solved.png` );
	},
};
