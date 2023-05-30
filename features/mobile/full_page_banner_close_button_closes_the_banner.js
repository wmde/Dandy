export default {

	description: 'Check if clicking full page banner "close" button closes the banner',

	steps: function ( banner ) {
		banner.clickMainBannerActionButton()
			.waitForFollowupBanner()
			.captureScreenshot( `banners/${ banner.getBannerName() }/full-page-banner.png` )
			.wait( 500 )
			.clickFullBannerCloseButton()
			.checkBannerIsHidden()
			.captureScreenshot( `banners/${ banner.getBannerName() }/full-page-banner__has_been_closed.png` );
	},
};
