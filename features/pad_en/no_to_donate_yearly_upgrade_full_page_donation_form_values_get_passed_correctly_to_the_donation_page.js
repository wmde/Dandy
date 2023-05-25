import { amounts, intervals, paymentTypes, upgradeOptions } from '../../config/banners.js';
import { amount, interval, paymentType } from '../../config/forms.js';
import DonationForm from '../../pages/DonationForm.js';

export default {

	description: 'Do you want to donate yearly? NO :Check if submitting the full page donation form values:' +
		'interval, payment type and donation amount get passed correctly to the spenden.wikimedia.de page',

	steps: function ( banner ) {
		banner.clickInterval( intervals.single_payment )
			.clickAmount( amounts.five )
			.clickPaymentType( paymentTypes.paypal )
			.submitFullPageDonationForm()
			.clickAnnualUpgradeOption( upgradeOptions.no )
//			.submitFullPageDonationFormAnnualUpgradeChoice()
			.wait( 2000 );

		const donationForm = DonationForm.createFromBanner( banner );
		donationForm.checkForSubmittedDonationForm()
			.checkPaymentType( paymentType.paypal )
			.checkInterval( interval.single_payment )
			.checkAmount( amount.five );
	},
};
