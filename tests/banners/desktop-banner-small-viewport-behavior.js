import { bannerConfig } from '../../config/banners.js';
import Banner from '../../pages/Banner.js';
import buildBannerTestConfig from '../../src/build_banner_test_config.js';

const testConfig = buildBannerTestConfig( process.argv );

( async () => {

	// Test - 01: Desktop: On big viewports there is a big text element, on small viewports the slider element is shown
	//const banner = new Banner( testConfig.url, bannerConfig.selectors, testConfig.parameters, { viewport: { width:1299, height:800 } } );

	//Test - 02: If the viewport is too small (check size issue threshold): the banner should not be loaded
	// At width 577px banner does not appear, it starts appearing at 578px
	const banner = new Banner( testConfig.url, bannerConfig.selectors, testConfig.parameters, { viewport: { width:577, height:800 } } );

	await banner.waitForBanner()
		.checkSliderIsDisplayedOnSmallViewPort()
		.checkSlidesAreSlidingInSlider()
		.captureScreenshot( `banners/${ testConfig.bannerName }/desktop-banner-small-viewport_second_slide.png` )
		.run();
} )();
