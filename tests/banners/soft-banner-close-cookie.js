import { bannerConfig } from '../../config/banners.js';
import Banner from '../../pages/Banner.js';
import buildBannerTestConfig from '../../src/build_banner_test_config.js';

const testConfig = buildBannerTestConfig( process.argv );

( async () => {

	const banner = new Banner( testConfig.url, bannerConfig.selectors, testConfig.parameters, testConfig.options );

	await banner.waitForBanner()
		.clickMainBannerCloseButton()
		.waitForSoftClose()
		.clickSoftCloseCloseButton()
		.wait( 500 ) // Give the cookie time to be set
		.checkCookieExists( 'centralnotice_hide_fundraising' )
		.captureScreenshot( `banners/${ testConfig.bannerName }/banner-loads.png` )
		.run();
} )();
