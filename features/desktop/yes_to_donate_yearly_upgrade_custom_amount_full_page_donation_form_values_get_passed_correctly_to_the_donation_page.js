import { amounts, intervals, paymentTypes, upgradeOptions } from '../../config/banners.js';
import { amount, interval, paymentType } from '../../config/forms.js';
import DonationForm from '../../pages/DonationForm.js';

export default class YesToDonateYearlyUpgradeCustomAmountFullPageDonationFormValuesGetPassedCorrectlyToTheDonationPage {

	description = 'Yes to donate yearly upgrade with custom amount, full page donation form values get passed' +
		'correctly to the donation page';

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickInterval( intervals.single_payment )
			.clickAmount( amounts.five )
			.clickPaymentType( paymentTypes.paypal )
			.submitFullPageDonationForm()
			.clickAnnualUpgradeOption( upgradeOptions.custom_amount )
			.wait( 2000 ) // wait for the next form page to appear
			.enterAnnualUpgradeOptionCustomAmount( '100' )
			.submitFullPageDonationFormCustomAmount()
			// .captureScreenshot( `banners/${ banner.getBannerName() }/upgrade-to-donate-yearly-custom-amount.png` )
			.wait( 4000 );

		const donationForm = DonationForm.createFromBanner( banner );
		donationForm.checkForSubmittedDonationForm()
			.checkPaymentType( paymentType.paypal )
			.checkInterval( interval.annually )
			.checkAmount( amount.one_hundred );
	}
}
