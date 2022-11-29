import { amounts, bannerConfig, intervals, paymentTypes } from '../../config/banners.js';
import Banner from '../../pages/Banner.js';
import buildBannerTestConfig from '../../src/build_banner_test_config.js';

const testConfig = buildBannerTestConfig( process.argv );

( async () => {

	const banner = new Banner( testConfig.url, bannerConfig.selectors, testConfig.parameters, testConfig.options );

	await banner.waitForBanner()
		.clickInterval( intervals.yearly )
		.clickAmount( amounts.five )
		.clickPaymentType( paymentTypes.paypal )
		.submitFormStep1()
		.wait( 1000 ) // Give event time to fire
		.checkEventContainsDataKey( 'submit', 'viewportWidth' )
		.checkEventContainsDataKey( 'submit', 'viewportHeight' )
		.run();
} )();
