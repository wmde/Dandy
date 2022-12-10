import { amounts, bannerConfig, intervals, paymentTypes } from '../../config/banners.js';
import Banner from '../../pages/Banner.js';
import buildBannerTestConfig from '../../src/build_banner_test_config.js';

const testConfig = buildBannerTestConfig( process.argv );

( async () => {

	const test = new Banner( testConfig.url, bannerConfig.selectors, testConfig.parameters, testConfig.options );

	await test.testFeature('Test-01 : Check if mini banner has \'Text highlight\'', banner => {
		 banner.waitForBanner()
			.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-mini-banner.png` )

			.checkIfMiniBannerHasAnimatedTextHighlight()
			.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-mini-banner_text_highlight.png` )
	} )
	.testFeature( "Test-02 : Check if 'clicking' mini banner action button leads to full page followup banner", banner => {
		 	banner.waitForBanner()
			.clickMiniBannerButton()
			.waitForFollowupBanner()
			.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-full-page-banner.png` )

	} )
	.testFeature( "Test-03 : Check if full page banner has 'Text highlight'", banner => {
		banner.waitForBanner()
		.clickMiniBannerButton()
		.waitForFollowupBanner()
		.checkIfFullPageBannerHasAnimatedTextHighlight()
		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-full-page-banner_text_highlight.png` )
	} )
	.run();
} )();
