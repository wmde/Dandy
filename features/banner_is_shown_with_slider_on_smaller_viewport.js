export default class BannerIsShownWithSliderOnSmallerViewport {

	description = 'Banner is shown with slider on smaller viewport';

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.setViewPort( 1299, 800 )
			.reload() // Reload to trigger size issue check
			.wait( 10000 )
			.waitForBanner()
			.checkSliderIsDisplayedOnSmallViewPort()
			.captureScreenshot( `banners/${ banner.getBannerName() }/banner-with-slider-on-smaller-viewport.png` )
			.checkSlidesAreSlidingInSlider()
			.captureScreenshot( `banners/${ banner.getBannerName() }/banner-with-slider-on-smaller-viewport_second_slide.png` )
			.resetViewPort();
	}
}
