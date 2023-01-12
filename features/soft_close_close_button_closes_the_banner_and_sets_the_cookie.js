export default class SoftCloseCloseButtonClosesTheBannerAndSetsTheCookie {
	description = 'Soft close close button closes the banner and sets the cookie';

	/**
	 *
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMiniBannerCloseButton()
			.captureScreenshot( `banners/${ banner.getBannerName() }/mini-banner_closed__test_soft_close_functionality.png` )
			.waitForSoftClose()
			.clickSoftCloseCloseButton()
			.wait( 500 ) // Give the cookie time to get set
			.checkBannerIsHidden()
			.checkCookieExists( 'centralnotice_hide_fundraising' )
			.captureScreenshot( `banners/${ banner.getBannerName() }/after-clicking-soft-close-close-button-banner-has-disappeared-now.png` )
	}
}
