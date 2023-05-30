import DonationForm from '../../pages/DonationForm.js';
import {addressTypes, amounts, intervals, paymentTypes} from '../../config/banners.js';

export default {

	description: 'Submitting banner leads to donation page with correct corresponding language',

	steps: function ( banner ) {
		banner.clickAmount( amounts.one_hundred )
			.clickPaymentType( paymentTypes.bank_transfer )
			.clickInterval( intervals.monthly )
			.submitFullPageDonationForm()

			.clickAddressTypesOption( addressTypes.anonymous )
			.submitFullPageDonationFormAddressType()

			.wait( 20000 );

		const donationForm = DonationForm.createFromBanner( banner );
		donationForm.checkIsOnSuccessPage();

		// const donationForm = DonationForm.createFromBanner( banner );
		// donationForm.checkIfSubmittingTheBannerDonationFormLeadsToDonationPageWithCorrectCorrespondingLanguage( banner.getBannerName() );
	},
};
