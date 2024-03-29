export default {

	description: 'Micro banner disappears after 15 seconds without user interaction',

	steps: function ( banner ) {
		banner.clickMainBannerCloseButton()
			.captureScreenshot( `banners/${ banner.getBannerName() }/mini-banner_closed__test_soft_close_functionality.png` )
			.waitForMicroBanner()
			.wait( 15000 )
			.checkBannerIsHidden()
			.captureScreenshot( `banners/${ banner.getBannerName() }/because-of-no-user-interaction-after-15-seconds-banner-has-disappeared-now.png` );
	},
};
