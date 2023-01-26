export default class UseOfFundsLinkIsWorking {

	description = 'Use of funds link is working';

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMainBannerActionButton()
			.waitForFollowupBanner()
			.wait( 2000 ) // wait for followup banner to appear nicely
			.clickUseOfFundsLink()
			.checkUseOfFundsIsVisible()
			.captureScreenshot( `banners/${ banner.getBannerName() }/use-of-funds.png` );
	}
}
