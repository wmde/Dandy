export default {

	description: 'Micro banner close button closes the banner and sets the cookie',

	steps: function ( banner ) {
		if ( banner.checkIfInDevEnvironment() ) {
			banner.markStepAsSkipped( 'Local environment does NOT support cookies for Wikipedia.' );
			return;
		}

		banner.clickMainBannerCloseButton()
			.captureScreenshot( `banners/${ banner.getBannerName() }/mini-banner_closed__test_soft_close_functionality.png` )
			.waitForMicroBanner()
			.clickMicroBannerCloseButton()
			.wait( 500 ) // Give the cookie time to get set
			.checkBannerIsHidden()
			.checkCookieExists( 'centralnotice_hide_fundraising' )
			.captureScreenshot( `banners/${ banner.getBannerName() }/after-clicking-soft-close-close-button-banner-has-disappeared-now.png` );
	},
};
