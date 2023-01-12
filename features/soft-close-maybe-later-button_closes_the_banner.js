export default class SoftCloseMaybeLaterButtonClosesTheBanner {
	description = 'Soft close maybe later button closes the banner';

	/**
	 *
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMiniBannerCloseButton()
			.captureScreenshot( `banners/${ banner.getBannerName() }/mini-banner_closed__test_for_soft_close_maybe_later_functionality.png` )
			.waitForSoftClose()
			.clickSoftCloseMaybeLaterButton()
			.checkBannerIsHidden()
			.captureScreenshot( `banners/${ banner.getBannerName() }/after-clicking-soft-close-maybe-later-button-banner-has-disappeared-now.png` )
	}
}
