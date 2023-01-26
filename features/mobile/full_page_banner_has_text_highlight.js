export default class FullPageBannerHasTextHighlight {

	description = 'Check if full page banner has "Text highlight"';

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMainBannerActionButton()
			.waitForFollowupBanner()
			.checkIfFullPageBannerHasAnimatedTextHighlight()
			.wait( 2000 ) // Wait here to let the 'text highlight' appear
			.captureScreenshot( `banners/${ banner.getBannerName() }/full-page-banner_has_text_highlight.png` );
	}
}
