export default {
	description: 'Check if "clicking" main banner action button leads to full page followup banner',
	steps: function ( banner ) {
		banner.clickMainBannerActionButton()
			.waitForFollowupBanner()
			.captureScreenshot( `banners/${ banner.getBannerName() }/full-page-banner__action-button-test.png` );
	},
};
