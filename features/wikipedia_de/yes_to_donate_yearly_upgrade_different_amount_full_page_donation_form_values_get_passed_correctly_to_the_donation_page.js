import {amounts, intervals, paymentTypes, upgradeOptions} from '../../config/banners.js';
import { amount, interval, paymentType } from '../../config/forms.js';
import DonationForm from "../../pages/DonationForm.js";

export default class YesToDonateYearlyUpgradeDifferentAmountFullPageDonationFormValuesGetPassedCorrectlyToTheDonationPage {

	description = 'Do you want to donate yearly? YES with different amount :Check if submitting the full page' +
		'donation form values: interval, payment type and donation amount get passed correctly to the' +
		'spenden.wikimedia.de page';

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickInterval( intervals.single_payment )
			.clickAmount( amounts.fifty )
			.clickPaymentType( paymentTypes.paypal )
			.submitFullPageDonationForm()
			.clickAnnualUpgradeOption( upgradeOptions.custom_amount )
			.wait( 2000 ) 	//wait for the next form page to appear
			.clickAmount( amounts.twenty_five )
			.submitFullPageDonationForm()
			.wait( 2000 );

		const donationForm = DonationForm.createFromBanner( banner );
		donationForm.checkForSubmittedDonationForm()
			.checkPaymentType( paymentType.paypal )
			.checkInterval( interval.annually )
			.checkAmount( amount.twenty_five )
	}
}
