export default class MiniBannerCloseButtonClosesTheBannerAndSetsTheCookie {

	description = "Check if clicking mini banner close button 'closes' the banner and 'sets' the cookie";

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMainBannerCloseButton()
			.checkBannerIsHidden()
			.captureScreenshot( `banners/${ banner.getBannerName() }/mobile-mini-banner_closed_cookie_set.png` )
			.wait( 2000 )
			.checkCookieExists( 'centralnotice_hide_fundraising' )
	}
}

