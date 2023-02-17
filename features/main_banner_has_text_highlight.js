export default {
	description: 'Check if main banner has "Text highlight"',
	steps: function ( banner ) {
		banner.checkIfMainBannerHasAnimatedTextHighlight()
			.captureScreenshot( `banners/${ banner.getBannerName() }/mini-banner_has_text_highlight.png` );
	},
};
