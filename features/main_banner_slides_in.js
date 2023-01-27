export default {
	description: 'Main banner slides in',
	steps: function ( banner ) {
		banner.waitForBanner()
			.captureScreenshot( `banners/${ banner.getBannerName() }/main_banner_slides_in.png` );
	},
};
