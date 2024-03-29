import Banner from '../../pages/Banner.js';
import buildBannerTestConfig from '../../src/build_banner_test_config.js';
const testConfig = buildBannerTestConfig( process.argv );

import { bannerConfig } from '../../config/banners.js';

( async () => {

	const banner = new Banner( testConfig.url, bannerConfig.selectors, testConfig.parameters, testConfig.options );

	await banner.waitForBanner()
		.captureScreenshot( `banners/${ testConfig.bannerName }/banner-loads.png` )
		.run();
} )();
