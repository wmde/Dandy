export default {

	description: 'Micro banner maybe later button closes the banner',

	steps: function ( banner ) {
		banner.clickMainBannerCloseButton()
			.captureScreenshot( `banners/${ banner.getBannerName() }/mini-banner_closed_micro_banner_shows_up__test_for_soft_close_maybe_later_functionality.png` )
			.waitForSoftClose()
			.clickSoftCloseMaybeLaterButton()
			.checkBannerIsHidden()
			.captureScreenshot( `banners/${ banner.getBannerName() }/after-clicking-soft-close-maybe-later-button-micro-banner-has-disappeared-now.png` );
	},
};
