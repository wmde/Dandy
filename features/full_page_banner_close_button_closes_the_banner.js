export default class BannerSlidesIn {

	description = 'Check if clicking full page banner \'close\' button closes the banner';

	/**
	 *
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickFollowUpBannerCloseButton()
			.captureScreenshot( `banners/${ banner.getBannerName() }/full-page-banner__has_been_closed.png` )
	}
}