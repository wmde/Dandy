import { addressTypes, amounts, intervals, paymentTypes, upgradeOptions } from '../../../config/banners.js';
import DonationForm from '../../../pages/DonationForm.js';

export default {

	description: 'Do you want to donate yearly? YES :Check if submitting the full page donation form values:' +
		'interval, payment type and donation amount get passed correctly to the spenden.wikimedia.de page',

	steps: function ( banner ) {
		banner.clickInterval( intervals.single_payment )
			.clickAmount( amounts.one_hundred )
			.clickPaymentType( paymentTypes.bank_transfer )
			.submitFullPageDonationForm()

			.wait( 500 )

			.clickAnnualUpgradeOption( upgradeOptions.yes )
			.submitFullPageDonationFormAnnualUpgradeChoice()

			.wait( 500 )

			.clickAddressTypesOption( addressTypes.anonymous )
			.submitFullPageDonationFormAddressType()

			.wait( 5000 );

		const donationForm = DonationForm.createFromBanner( banner );
		donationForm.checkIsOnSuccessPage();
	},
};
