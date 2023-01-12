//DELETE this file
export default class MiniBannerHasTextHighlight {

	description = 'Check if mini banner has \'Text highlight\'';

	/**
	 *
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.checkIfMiniBannerHasAnimatedTextHighlight()
			.captureScreenshot( `banners/${ banner.getBannerName() }/mini-banner_has_text_highlight.png` )
	}
}