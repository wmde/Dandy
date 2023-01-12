export default class SelectingMonthlyPaymentIntervalOnTheFullPageBannerDisablesTheSofortPaymentType {

	description = '';

	/**
	 *
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMiniBannerButton()
			.waitForFollowupBanner()
			.clickInterval( intervals.monthly )
			.captureScreenshot( `banners/${ banner.getBannerName() }/fullpage-banner_monthly_interval_selected.png` )
			.checkPaymentTypeSofortIsDisabled()
			.captureScreenshot( `banners/${ banner.getBannerName() }/fullpage-banner_monthly_interval_selected_sofort_disabled.png` )
	}
}