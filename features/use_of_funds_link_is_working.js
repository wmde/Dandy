export default {

	description: 'Use of funds link is working',

	steps: function ( banner ) {
		banner.clickUseOfFundsLink()
			.checkUseOfFundsIsVisible()
			.captureScreenshot( `banners/${ banner.getBannerName() }/use-of-funds.png` );
	},
};
