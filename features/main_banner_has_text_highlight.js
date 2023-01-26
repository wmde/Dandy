export default class MainBannerHasTextHighlight {

	description = "Check if main banner has 'Text highlight'";

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.checkIfMainBannerHasAnimatedTextHighlight()
			.captureScreenshot( `banners/${ banner.getBannerName() }/mini-banner_has_text_highlight.png` );
	}
}
