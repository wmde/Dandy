export default class MiniBannerActionButtonLeadsToFollowUpBanner {

	description = "Check if 'clicking' mini banner action button leads to full page followup banner";

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMiniBannerActionButton()
			.waitForFollowupBanner()
			.captureScreenshot( `banners/${ banner.getBannerName() }/full-page-banner__action-button-test.png` )
	}
}

