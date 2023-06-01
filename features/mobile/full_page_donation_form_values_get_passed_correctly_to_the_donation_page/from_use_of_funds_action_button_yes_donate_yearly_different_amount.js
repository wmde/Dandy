import { amounts, intervals, paymentTypes, upgradeOptions } from '../../../config/banners.js';
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

			.clickInterval( intervals.single_payment )
			.clickAmount( amounts.fifty )
			.clickPaymentType( paymentTypes.paypal )
			.submitFullPageDonationForm()

			.wait( 500 )

			.clickAnnualUpgradeOption( upgradeOptions.custom_amount )
			.wait( 2000 ) // wait for the next form page to appear
			.clickAmount( amounts.twenty_five )
			.wait( 500 )
			.submitFullPageDonationForm()
			.wait( 4000 );

		const donationForm = DonationForm.createFromBanner( banner );
		donationForm.checkForSubmittedDonationForm()
			.checkPaymentType( paymentType.paypal )
			.checkInterval( interval.annually )
			.checkAmount( amount.twenty_five );
	},
};
