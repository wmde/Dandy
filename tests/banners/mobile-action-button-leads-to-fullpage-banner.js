import { bannerConfig } from '../../config/banners.js';
import Banner from '../../pages/Banner.js';
import buildBannerTestConfig from '../../src/build_banner_test_config.js';

const testConfig = buildBannerTestConfig( process.argv );

( async () => {

	const banner = new Banner( testConfig.url, bannerConfig.selectors, testConfig.parameters, testConfig.options );

	await banner.waitForBanner()

		// .checkIfMiniBannerHasAnimatedTextHighlight()
		// .captureScreenshot( `banners/${ testConfig.bannerName }/mobile-mini-banner_text_highlight.png` )
		//
		// .clickMiniBannerButton()
		// .captureScreenshot( `banners/${ testConfig.bannerName }/mobile-mini-banner.png` )
		//
		// .waitForFollowupBanner()
		//
		// .checkIfFullPageBannerHasAnimatedTextHighlight()
		// .captureScreenshot( `banners/${ testConfig.bannerName }/mobile-full-page-banner_text_highlight.png` )
		//
		// .clickFollowUpBannerCloseButton()
		// .captureScreenshot( `banners/${ testConfig.bannerName }/mobile-full-page-banner_closed.png` )
		//
		// .reload()
		// .waitForBanner()
		// .captureScreenshot( `banners/${ testConfig.bannerName }/mobile-mini-banner_reload.png` )
		// .clickMiniBannerCloseButton()
		// .captureScreenshot( `banners/${ testConfig.bannerName }/mobile-mini-banner_closed.png` )

		// .reload()
		// .waitForBanner()

		.clickMiniBannerButton()
		.waitForFollowupBanner()
		.clickMonthlyPaymentInterval()
		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-fullpage-banner_monthly_interval_selected.png` )
		.checkPaymentTypeSofortIsDisabled()

		.reload()
		.waitForBanner()

		.clickMiniBannerButton()
		.waitForFollowupBanner()

		.clickYearlyPaymentInterval()
		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-fullpage-banner_yearly_interval_selected.png` )
		.checkPaymentTypeSofortIsDisabled()

		.run();
} )();
