export default class BannerClosesWithSoftClose {

	description = 'Banner closes with soft close (micro banner appears)';

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMainBannerCloseButton()
			.waitForSoftClose()
			.captureScreenshot( `banners/${ banner.getBannerName() }/banner_has_been_closed_with_soft_close_micro_banner_appears.png` );
	}
}