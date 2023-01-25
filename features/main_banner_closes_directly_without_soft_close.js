export default class MainBannerClosesDirectlyWithoutSoftClose {

	description = 'Main banner closes directly without soft close';

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMainBannerCloseButton()
			.checkBannerIsHidden()
			.captureScreenshot( `banners/${ banner.getBannerName() }/banner_has_been_closed_directly_without_soft_close.png` );
	}
}
