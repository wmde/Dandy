export default class MainBannerSlidesIn {

	description = 'Main banner slides in';

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.waitForBanner()
			.captureScreenshot( `banners/${ banner.getBannerName() }/main_banner_slides_in.png` )
	}
}