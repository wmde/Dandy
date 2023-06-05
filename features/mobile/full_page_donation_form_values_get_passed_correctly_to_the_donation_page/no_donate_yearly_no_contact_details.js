import { amounts, contactDetails, intervals, paymentTypes, upgradeOptions } from '../../../config/banners.js';
import DonationForm from '../../../pages/DonationForm.js';

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

			.wait( 500 )

			.clickAnnualUpgradeOption( upgradeOptions.no )

			.wait( 500 )

			.clickContactDetailsOption( contactDetails.anonymous )
			.wait( 5000 );

		const donationForm = DonationForm.createFromBanner( banner );
		donationForm.checkIsOnSuccessPage();
	},
};
