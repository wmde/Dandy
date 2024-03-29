import DonationForm from '../../pages/DonationForm.js';
import { amounts, intervals, paymentTypes } from '../../config/banners.js';

export default {

	description: 'Submitting banner leads to donation page with correct corresponding language',

	steps: function ( banner ) {
		banner.clickAmount( amounts.one_hundred )
			.clickPaymentType( paymentTypes.paypal )
			.clickInterval( intervals.monthly )
			.submitFullPageDonationForm()

			.wait( 3000 );

		const donationForm = DonationForm.createFromBanner( banner );
		donationForm.checkIfSubmittingTheBannerDonationFormLeadsToDonationPageWithCorrectCorrespondingLanguage( banner.getBannerName() );
	},
};
