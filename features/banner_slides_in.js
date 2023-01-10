export default class BannerSlidesIn {

	description = 'Banner slides in';

	/**
	 *
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.waitForBanner()
	}
}