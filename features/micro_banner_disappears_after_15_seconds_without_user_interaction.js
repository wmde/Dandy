export default class MicroBannerDisappearsAfter15SecondsWithoutUserInteraction {
	description = 'Micro banner disappears after 15 seconds without user interaction';

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMainBannerCloseButton()
			.captureScreenshot( `banners/${ banner.getBannerName() }/mini-banner_closed__test_soft_close_functionality.png` )
			.waitForSoftClose()
			.wait( 15000 )
			.checkBannerIsHidden()
			.captureScreenshot( `banners/${ banner.getBannerName() }/because-of-no-user-interaction-after-15-seconds-banner-has-disappeared-now.png` );
	}
}
