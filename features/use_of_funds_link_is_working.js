export default class UseOfFundsLinkIsWorking {

	description = 'Use of funds link is working';

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickUseOfFundsLink()
			.checkUseOfFundsIsVisible()
			.captureScreenshot( `banners/${ banner.getBannerName() }/use-of-funds.png` );
	}
}