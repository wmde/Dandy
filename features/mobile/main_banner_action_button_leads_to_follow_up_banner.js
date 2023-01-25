export default class MainBannerActionButtonLeadsToFollowUpBanner {

	description = "Check if 'clicking' main banner action button leads to full page followup banner";

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMainBannerActionButton()
			.waitForFollowupBanner()
			.captureScreenshot( `banners/${ banner.getBannerName() }/full-page-banner__action-button-test.png` );
	}
}
