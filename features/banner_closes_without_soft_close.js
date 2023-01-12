export default class BannerClosesWithoutSoftClose {

	description = 'Banner closes';

	/**
	 *
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMiniBannerCloseButton()
			.checkBannerIsHidden() // Have two feature tests : 1. With soft close, 2.Without soft-close
			.captureScreenshot( `banners/${ banner.getBannerName() }/banner_has_been_closed.png` )
	}
}