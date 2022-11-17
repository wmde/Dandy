import { bannerConfig } from '../../config/banners.js';
import Banner from '../../pages/Banner.js';
import buildBannerTestConfig from '../../src/build_banner_test_config.js';

const testConfig = buildBannerTestConfig( process.argv );

( async () => {

	const banner = new Banner( testConfig.url, bannerConfig.selectors, testConfig.parameters, testConfig.options );

	await banner.waitForBanner()
		.clickUseOfFundsLink()
		.checkUseOfFundsIsVisible()
		.captureScreenshot( `banners/${ testConfig.bannerName }/use-of-funds.png` )
		.checkIfActionButtonOnUOFLeadsToFullPageDonationForm()
		.captureScreenshot( `banners/${ testConfig.bannerName }/donation-form-on-banner.png` )
		.run();
} )();
