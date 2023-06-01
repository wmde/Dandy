import { amounts, intervals, paymentTypes } from '../../../config/banners.js';
import { amount, interval, paymentType } from '../../../config/forms.js';
import DonationForm from '../../../pages/DonationForm.js';

export default {

	description: 'From use of funds action button full page donation form values passed correctly to the donation form',

	steps: function ( banner ) {
		banner.clickMainBannerActionButton()
			.waitForFollowupBanner()
			.wait( 2000 ) // wait for followup banner to appear nicely
			.clickUseOfFundsLink()
			.checkUseOfFundsIsVisible()
			.captureScreenshot( `banners/${ banner.getBannerName() }/use-of-funds.png` )
			.clickUseOfFundsActionButton()
			.wait( 2000 ) // wait for the donation form to appear

			.clickInterval( intervals.monthly )
			.clickAmount( amounts.one_hundred )
			.clickPaymentType( paymentTypes.paypal )
			.submitFullPageDonationForm()
			.wait( 5000 )
			.captureScreenshot( `banners/${ banner.getBannerName() }/reached_to_donation_form.png` );

		const donationForm = DonationForm.createFromBanner( banner );
		donationForm.checkForSubmittedDonationForm()
			.checkPaymentType( paymentType.paypal )
			.checkInterval( interval.monthly )
			.checkAmount( amount.one_hundred );
	},
};
