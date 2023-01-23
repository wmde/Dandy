export default class FullPageBannerCloseButtonClosesTheBanner {

	description = "Check if clicking full page banner 'close' button closes the banner";

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMainBannerActionButton()
			.waitForFollowupBanner()
			.captureScreenshot( `banners/${ banner.getBannerName() }/full-page-banner.png` )
			.clickFullBannerCloseButton()
			.checkBannerIsHidden()
			.captureScreenshot( `banners/${ banner.getBannerName() }/full-page-banner__has_been_closed.png` )
	}
}