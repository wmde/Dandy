export default class BannerSlidesIn {

	description = 'Banner slides in';

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.waitForBannerWPDE()
			.captureScreenshot( `banners/${ banner.getBannerName() }/banner_is_present_WPDE.png` )
	}
}