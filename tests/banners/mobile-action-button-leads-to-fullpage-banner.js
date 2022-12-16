import { amounts, bannerConfig, intervals, paymentTypes } from '../../config/banners.js';
import Banner from '../../pages/Banner.js';
import buildBannerTestConfig from '../../src/build_banner_test_config.js';

const testConfig = buildBannerTestConfig( process.argv );

( async () => {

	const banner = new Banner( testConfig.url, bannerConfig.selectors, testConfig.parameters, testConfig.options );

	await banner.waitForBanner()

		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-mini-banner.png` )

		// Test-01 : Check if mini banner has 'Text highlight'
		.checkIfMiniBannerHasAnimatedTextHighlight()
		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-mini-banner_text_highlight.png` )

		// Test-02 : Check if 'clicking' mini banner action button leads to full page followup banner
		.clickMiniBannerButton()
		.waitForFollowupBanner()
		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-full-page-banner.png` )

		// Test-03 : Check if full page banner has 'Text highlight'
		.checkIfFullPageBannerHasAnimatedTextHighlight()
		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-full-page-banner_text_highlight.png` )

		// Test-04 : Check if clicking full page banner 'close' button closes the banner
		.clickFollowUpBannerCloseButton()
		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-full-page-banner_closed.png` )

		// RELOAD the page to carry on next tests
		.reload()

		.waitForBanner()
		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-mini-banner_reload.png` )

		// Test-05 : Check if clicking mini banner close button 'closes' the banner and 'sets' the cookie
		.clickMiniBannerCloseButton()
		.checkBannerIsHidden()
		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-mini-banner_closed.png` )
		.wait( 2000 )
		.checkCookieExists( 'centralnotice_hide_fundraising' )

		// Test-06 : Test Soft close functionality thoroughly
		.clickMiniBannerCloseButton()
		.checkBannerIsHidden()
		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-mini-banner_closed_soft_close_functionality.png` )
		.waitForSoftClose()
		.clickSoftCloseCloseButton()
		.wait( 500 ) // Give the cookie time to get set
		.checkBannerIsHidden()
		.checkCookieExists( 'centralnotice_hide_fundraising' )
		.captureScreenshot( `banners/${ testConfig.bannerName }/after-clicking-soft-close-close-button-banner-has-disappeared-now.png` )

		// RELOAD the page to carry on next tests
		.reload()

		.waitForBanner()

		.clickMiniBannerCloseButton()
		.checkBannerIsHidden()
		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-mini-banner_closed_soft_close_functionality_1.png` )
		.waitForSoftClose()
		.clickSoftCloseMaybeLaterButton()
		.checkBannerIsHidden()
		.captureScreenshot( `banners/${ testConfig.bannerName }/after-clicking-soft-close-maybe-later-button-banner-has-disappeared-now.png` )

		// RELOAD the page to carry on next tests
		.reload()

		.waitForBanner()

		.clickMiniBannerCloseButton()
		.checkBannerIsHidden()
		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-mini-banner_closed_soft_close_functionality_2.png` )
		.waitForSoftClose()
		.wait( 15000 )
		.checkBannerIsHidden()
		.captureScreenshot( `banners/${ testConfig.bannerName }/because-of-no-user-interaction-after-15-seconds-banner-has-disappeared-now.png` )


		// RELOAD the page to carry on next tests
		.reload()

		.waitForBanner()
		.clickMiniBannerButton()
		.waitForFollowupBanner()

		// Test-07 : Check if selecting 'monthly' payment interval on the full page banner 'disables' the 'Sofort' payment type
		.clickInterval( intervals.monthly )
		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-fullpage-banner_monthly_interval_selected.png` )
		.checkPaymentTypeSofortIsDisabled()

		// RELOAD the page to carry on next tests
		.reload()

		.waitForBanner()

		.clickMiniBannerButton()
		.waitForFollowupBanner()

		// Test-08 : Check if selecting 'annually' payment interval on the full page banner 'disables' the 'Sofort' payment type
		.clickInterval( intervals.annually )
		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-fullpage-banner_annually_interval_selected.png` )
		.checkPaymentTypeSofortIsDisabled()

		// Test-09 : Check if submitting the full page donation form values: interval, payment type and donation amount gets passed correctly to the spenden.wikimedia.de page
		.clickAmount( amounts.one_hundred )
		.clickPaymentType( paymentTypes.paypal )
		.submitFullPageDonationForm()

		.wait( 3000 )

		.checkForSubmittedDonationForm()
		.checkInterval( intervals.annually )
		.checkAmount( amounts.one_hundred )
		.checkPaymentType( paymentTypes.paypal )

		// RELOAD the page to carry on next tests
		.reload()

		.waitForBanner()

		.clickMiniBannerButton()
		.waitForFollowupBanner()

		// Test-10 : On donation form, if a user misses filling out a field and clicks on submit: red error markers should be visible in the respective form section
		.clickAmount( amounts.one_hundred )
		.clickPaymentType( paymentTypes.paypal )

		.submitFullPageDonationForm()
		.checkIfMissingIntervalErrorMsgIsShown()

		.captureScreenshot( `banners/${ testConfig.bannerName }/mobile-fullpage-banner_interval_missing_error_msg.png` )

		//  Test-11 : If a user causes a validation error and solves it, clicks on submit: the red error markers should be gone again
		.clickInterval( intervals.monthly )
		.submitFullPageDonationForm()

		.wait( 3000 )

		//  Test-12 : Does submitting on an english banner lead to https://spenden.wikimedia.de with &locale=en_GB ?
		.checkIfSubmittingTheBannerDonationFormLeadsToSpendenPageWithCorrectCorrespoindingLanguage( testConfig.bannerName )

		.checkForSubmittedDonationForm()
		.checkPaymentType( paymentTypes.paypal )
		.checkInterval( intervals.monthly )
		.checkAmount( amounts.one_hundred )

		// Go back to the PREVIOUS page to carry on next tests
		.goBackToPreviousPage()

		// RELOAD the page to carry on next tests
		.reload()
		.waitForBanner()

		.run();
} )();
