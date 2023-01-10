export default class BannerCloses {

	description = 'Banner closes';

	/**
	 *
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMiniBannerCloseButton()
			.checkBannerIsHidden()
	}
}