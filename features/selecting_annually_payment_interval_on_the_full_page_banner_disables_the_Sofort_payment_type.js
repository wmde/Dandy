export default class SelectingMonthlyPaymentIntervalOnTheFullPageBannerDisablesTheSofortPaymentType {

	description = '';

	/**
	 *
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMiniBannerButton()
			.waitForFollowupBanner()
			.clickInterval( intervals.annually )
			.captureScreenshot( `banners/${ banner.getBannerName() }/fullpage-banner_annually_interval_selected.png` )
			.checkPaymentTypeSofortIsDisabled()
			.captureScreenshot( `banners/${ banner.getBannerName() }/fullpage-banner_annually_interval_selected_sofort_disabled.png` )
	}
}