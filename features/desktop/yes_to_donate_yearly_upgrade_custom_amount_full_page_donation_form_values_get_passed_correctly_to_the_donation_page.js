import {amounts, intervals, paymentTypes, upgradeOptions} from '../../config/banners.js';
import { amount, interval, paymentType } from '../../config/forms.js';
import DonationForm from "../../pages/DonationForm.js";

export default class FullPageDonationFormValuesGetPassedCorrectlyToTheDonationPage {

	description = 'Do you want to donate yearly? :Check if submitting the full page donation form values: interval, payment type and donation amount gets passed correctly to the spenden.wikimedia.de page';

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMiniBannerActionButton()
			.waitForFollowupBanner()

			.clickInterval( intervals.single_payment )
			.clickAmount( amounts.one_hundred )
			.clickPaymentType( paymentTypes.paypal )
			.submitFullPageDonationForm()
			.clickAnnualUpgradeOption( upgradeOptions.custom_amount )
			.wait( 2000 ) 	//wait for the next form page to appear
			.clickAnnualUpgradeOptionCustomAmount( 100 )
			.submitFullPageDonationFormCustomAmount();

		const donationForm = DonationForm.createFromBanner( banner );
		donationForm.checkForSubmittedDonationForm()
			.checkPaymentType( paymentType.paypal )
			.checkInterval( interval.annually )
			.checkAmount( amount.one_hundred )
	}
}
