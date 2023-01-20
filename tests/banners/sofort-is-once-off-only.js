import { bannerConfig, paymentTypes } from '../../config/banners.js';
import Banner from '../../pages/Banner.js';
import buildBannerTestConfig from '../../src/build_banner_test_config.js';

const testConfig = buildBannerTestConfig( process.argv );

( async () => {
	const banner = new Banner( testConfig.url, bannerConfig.selectors, testConfig.parameters, testConfig.options );

	await banner.waitForBanner()
		.clickMiniBannerActionButton()
		.waitForFollowupBanner()
		.clickPaymentType( paymentTypes.sofort )
		.wait(100)
		.checkIntervalMonthlyIsDisabled()
		.checkIntervalYearlyIsDisabled()
		.captureScreenshot( `banners/${ testConfig.bannerName }/02-sofort-is-once-off-only.png` )
		.run();
} )();