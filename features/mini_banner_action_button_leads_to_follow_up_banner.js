export default class MiniBannerActionButtonLeadsToFollowUpBanner {

	description = 'Check if \'clicking\' mini banner action button leads to full page followup banner';

	/**
	 *
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMiniBannerButton()
			.waitForFollowupBanner()
			.captureScreenshot( `banners/${ banner.getBannerName() }/full-page-banner.png` )
	}
}

