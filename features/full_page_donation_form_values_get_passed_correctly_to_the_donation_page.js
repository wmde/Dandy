import { amounts, intervals, paymentTypes } from '../config/banners.js';
import { amount, interval, paymentType } from '../config/forms.js';
import DonationForm from "../../pages/DonationForm.js";

export default class FullPageDonationFormValuesGetPassedCorrectlyToTheDonationPage {

	description = 'Check if submitting the full page donation form values: interval, payment type and donation' +
		'amount get passed correctly to the spenden.wikimedia.de page';

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMainBannerActionButton()
			.waitForFollowupBanner()

			.clickInterval( intervals.monthly )
			.clickAmount( amounts.one_hundred )
			.clickPaymentType( paymentTypes.paypal )
			.submitFullPageDonationForm();

		const donationForm = DonationForm.createFromBanner( banner );
		donationForm.checkForSubmittedDonationForm()
			.checkPaymentType( paymentType.paypal )
			.checkInterval( interval.monthly )
			.checkAmount( amount.one_hundred )
	}
}