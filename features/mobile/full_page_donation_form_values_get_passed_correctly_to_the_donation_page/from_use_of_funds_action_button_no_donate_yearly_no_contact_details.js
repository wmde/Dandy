import { amounts, contactDetails, intervals, paymentTypes, upgradeOptions } from '../../../config/banners.js';
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
