export default class FullPageBannerHasTextHighlight {

	description = 'Check if full page banner has \'Text highlight\'';

	/**
	 *
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.checkIfFullPageBannerHasAnimatedTextHighlight()
			.captureScreenshot( `banners/${ banner.getBannerName() }/full-page-banner_has_text_highlight.png` );
	}
}