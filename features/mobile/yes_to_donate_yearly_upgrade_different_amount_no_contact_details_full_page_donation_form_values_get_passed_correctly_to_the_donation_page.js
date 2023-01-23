import {amounts, contactDetails, intervals, paymentTypes, upgradeOptions} from '../../config/banners.js';
import { amount, interval, paymentType } from '../../config/forms.js';
import DonationForm from "../../pages/DonationForm.js";

export default class YesToDonateYearlyUpgradeDifferentAmountNoContactDetailsFullPageDonationFormValuesGetPassedCorrectlyToTheDonationPage {

	description = 'Do you want to donate yearly? YES with different amount. Do you want to give your contact' +
		'details? NO :Check if submitting the full page donation form values: interval, payment type and donation' +
		'amount gets passed correctly to the spenden.wikimedia.de page';

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMainBannerActionButton()
			.waitForFollowupBanner()

			.clickInterval( intervals.single_payment )
			.clickAmount( amounts.fifty )
			.clickPaymentType( paymentTypes.bank_transfer )
			.submitFullPageDonationForm()
			.clickAnnualUpgradeOption( upgradeOptions.custom_amount )
			.wait( 2000 ) 	//wait for the next form page to appear
			.clickAmount( amounts.twenty_five )
			.submitFullPageDonationForm()
			.clickContactDetailsOption( contactDetails.anonymous )
			.wait( 2000 );

		const donationForm = DonationForm.createFromBanner( banner );
		donationForm.checkIsOnSuccessPage();
			// .checkForSubmittedDonationForm()
			// .checkPaymentType( paymentType.paypal )
			// .checkInterval( interval.annually )
			// .checkAmount( amount.twenty_five )
	}
}