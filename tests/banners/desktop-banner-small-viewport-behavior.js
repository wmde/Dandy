import { bannerConfig } from '../../config/banners.js';
import Banner from '../../pages/Banner.js';
import buildBannerTestConfig from '../../src/build_banner_test_config.js';

const testConfig = buildBannerTestConfig( process.argv );

( async () => {

	// Test - 01: Desktop: On big viewports there is a big text element, on small viewports the slider element is shown
	const bannerWithSlider = new Banner( testConfig.url, bannerConfig.selectors, testConfig.parameters, { viewport: { width: 1299, height: 800 } } );

	await bannerWithSlider.waitForBanner()
		.checkSliderIsDisplayedOnSmallViewPort()
		.checkSlidesAreSlidingInSlider()
		.captureScreenshot( `banners/${ testConfig.bannerName }/desktop-banner-small-viewport_second_slide.png` )
		.run();

	// Test - 02: If the viewport is too small (check size issue threshold): the banner should not be loaded
	const bannerTooSmallViewPort = new Banner( testConfig.url, bannerConfig.selectors, testConfig.parameters, { viewport: { width: 550, height: 800 } } );

	await bannerTooSmallViewPort
		.wait( 1000 )
		.reload() // Reload to force flushing of events
		.checkEventWasFired( 'size_issue' )
		.run();

} )();
