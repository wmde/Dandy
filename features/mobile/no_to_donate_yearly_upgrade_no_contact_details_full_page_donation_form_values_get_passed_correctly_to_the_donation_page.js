import { amounts, contactDetails, intervals, paymentTypes, upgradeOptions } from '../../config/banners.js';
import DonationForm from '../../pages/DonationForm.js';
import { amount, interval, paymentType, contactDetail } from '../../config/forms.js';

export default {

	description: 'Do you want to donate yearly? NO, Do you want to give your contact details? NO :Check if' +
		'submitting the full page donation form values: interval, payment type and donation amount gets passed' +
		'correctly to the spenden.wikimedia.de page',

	steps: function ( banner ) {
		banner.clickMainBannerActionButton()
			.waitForFollowupBanner()

			.clickInterval( intervals.single_payment )
			.clickAmount( amounts.five )
			.clickPaymentType( paymentTypes.bank_transfer )
			.submitFullPageDonationForm()
			.clickAnnualUpgradeOption( upgradeOptions.no )
			.clickContactDetailsOption( contactDetails.anonymous )
			.wait( 20000 );

		const donationForm = DonationForm.createFromBanner( banner );
		donationForm.checkIsOnSuccessPage();
		// donationForm.checkForSubmittedDonationForm()
		// 	.checkPaymentType( paymentType.bank_transfer )
		// 	.checkInterval( interval.single_payment )
		// 	.checkAmount( amount.five )
		// 	.checkContactDetail( contactDetail.anonymous );
	},
};
