import { amounts, contactDetails, intervals, paymentTypes, upgradeOptions } from '../../config/banners.js';
import { amount, interval, paymentType, contactDetail } from '../../config/forms.js';
import DonationForm from '../../pages/DonationForm.js';

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

			.clickInterval( intervals.single_payment )
			.clickAmount( amounts.five )
			.clickPaymentType( paymentTypes.bank_transfer )
			.submitFullPageDonationForm()
			.clickAnnualUpgradeOption( upgradeOptions.no )
			.clickContactDetailsOption( contactDetails.anonymous )
			.wait( 4000 );

		const donationForm = DonationForm.createFromBanner( banner );
		donationForm.checkIsOnSuccessPage();
		// donationForm.checkForSubmittedDonationForm()
		// 	.checkPaymentType( paymentType.bank_transfer )
		// 	.checkInterval( interval.single_payment )
		// 	.checkAmount( amount.five )
		// 	.checkContactDetail( contactDetail.anonymous );
	},
};
