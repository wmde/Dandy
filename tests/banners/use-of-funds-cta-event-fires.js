import { amounts, bannerConfig, intervals, paymentTypes } from '../../config/banners.js';
import Banner from '../../pages/Banner.js';
import buildBannerTestConfig from '../../src/build_banner_test_config.js';

const testConfig = buildBannerTestConfig( process.argv );

( async () => {

	const banner = new Banner( testConfig.url, bannerConfig.selectors, testConfig.parameters, testConfig.options );

	await banner.waitForBanner()
		.clickUseOfFundsLink()
		.clickUseOfFundsCallToAction()

		// Reloading forces the event to fire
		.reload()
		.wait( 1000 )

		.checkEventWasFired( 'funds-modal-donate-clicked' )
		.run();
} )();
