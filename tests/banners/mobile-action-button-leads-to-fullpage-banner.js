import { bannerConfig } from '../../config/banners.js';
import Banner from '../../pages/Banner.js';
import buildBannerTestConfig from '../../src/build_banner_test_config.js';

const testConfig = buildBannerTestConfig( process.argv );

( async () => {

	const banner = new Banner( testConfig.url, bannerConfig.selectors, testConfig.parameters, testConfig.options );

	await banner.waitForBanner()
		.checkIfMiniBannerHasAnimatedTextHighlight()
		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-mini-banner.png` )
		.clickMiniBannerButton()
		.waitForFollowupBanner()
		.checkIfFullPageBannerHasAnimatedTextHighlight()
		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-full-page-banner.png` )
		//.clickFollowUpBannerCloseButton()
		.clickMiniBannerCloseButton()
		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-full-page-banner_closed.png` )
		.reload()
		.waitForBanner()
		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-mini-banner_reload.png` )
		.clickMiniBannerCloseButton()
		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-mini-banner_closed.png` )
		.run();
} )();
