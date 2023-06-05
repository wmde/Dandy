import { amounts, contactDetails, intervals, paymentTypes, upgradeOptions } from '../../../config/banners.js';
import DonationForm from '../../../pages/DonationForm.js';
import { amount, contactDetail, interval, paymentType } from '../../../config/forms.js';

export default {

	description: 'Do you want to donate yearly? YES with different amount. Do you want to give your contact' +
		'details? NO :Check if submitting the full page donation form values: interval, payment type and donation' +
		'amount gets passed correctly to the spenden.wikimedia.de page',

	steps: function ( banner ) {
		banner.clickMainBannerActionButton()
			.waitForFollowupBanner()

			.clickInterval( intervals.single_payment )
			.clickAmount( amounts.fifty )
			.clickPaymentType( paymentTypes.bank_transfer )
			.submitFullPageDonationForm()

			.wait( 500 )

			.clickAnnualUpgradeOption( upgradeOptions.custom_amount )

			.wait( 500 ) // wait for the next form page to appear

			.clickAmount( amounts.twenty_five )
			.submitFullPageDonationForm()

			.wait( 500 )

			.clickContactDetailsOption( contactDetails.full )
			.wait( 5000 );

		const donationForm = DonationForm.createFromBanner( banner );
		donationForm.checkForSubmittedDonationForm()
			.checkPaymentType( paymentType.bank_transfer )
			.checkInterval( interval.annually )
			.checkAmount( amount.twenty_five )
			.checkContactDetail( contactDetail.full );
	},
};
