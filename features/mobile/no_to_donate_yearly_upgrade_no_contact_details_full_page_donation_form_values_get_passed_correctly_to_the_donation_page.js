import {amounts, contactDetails, intervals, paymentTypes, upgradeOptions} from '../../config/banners.js';
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
			.clickAmount( amounts.five )
			.clickPaymentType( paymentTypes.paypal )
			.submitFullPageDonationForm()
			.clickAnnualUpgradeOption( upgradeOptions.no )
			.clickContactDetailsOption( contactDetails.no )
			.submitFullPageDonationForm2();

		const donationForm = DonationForm.createFromBanner( banner );
		donationForm.checkForSubmittedDonationForm()
			.checkPaymentType( paymentType.paypal )
			.checkInterval( interval.single_payment )
			.checkAmount( amount.five )
	}
}
