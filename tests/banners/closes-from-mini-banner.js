import { bannerConfig } from '../../config/banners.js';
import Banner from '../../pages/Banner.js';
import buildBannerTestConfig from '../../src/build_banner_test_config.js';

const testConfig = buildBannerTestConfig( process.argv );

( async () => {
	const banner = new Banner( testConfig.url, bannerConfig.selectors, testConfig.parameters, testConfig.options );

	await banner.waitForBanner()
		.clickMiniBannerCloseButton()
		.wait( 100 )
		.checkBannerIsHidden()
		.captureScreenshot( `banners/${ testConfig.bannerName }/03-closes-from-mini-banner.png` )
		.run();
} )();
