import { bannerConfig } from '../../config/banners.js';
import Banner from '../../pages/Banner.js';
import buildBannerTestConfig from '../../src/build_banner_test_config.js';

const testConfig = buildBannerTestConfig( process.argv );

( async () => {

	const banner = new Banner( testConfig.url, bannerConfig.selectors, testConfig.parameters, { viewport: { width:1299, height:800 } } );

	await banner.waitForBanner()
		.checkSliderIsDisplayedOnSmallViewPort()
		.captureScreenshot( `banners/${ testConfig.bannerName }/desktop-banner-small-viewport.png` )
		.run();
} )();
