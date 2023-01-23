import {intervals} from "../config/banners.js";
export default class SelectingMonthlyPaymentIntervalOnTheFullPageBannerDisablesTheSofortPaymentType {

	description = "Selecting monthly payment interval on the full page banner disables the sofort payment type";

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMainBannerActionButton()
			.waitForFollowupBanner()
			.clickInterval( intervals.monthly )
			.wait( 500 ) //wait for browser to settle
			.captureScreenshot( `banners/${ banner.getBannerName() }/fullpage-banner_monthly_interval_selected.png` )
			.checkPaymentTypeSofortIsDisabled()
			.captureScreenshot( `banners/${ banner.getBannerName() }/fullpage-banner_monthly_interval_selected_sofort_disabled.png` )
	}
}