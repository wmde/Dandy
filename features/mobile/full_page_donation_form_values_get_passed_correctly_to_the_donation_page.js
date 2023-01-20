import { amounts, intervals, paymentTypes } from '../../config/banners.js';
import { amount, interval, paymentType } from '../../config/forms.js';
import DonationForm from "../../pages/DonationForm.js";

export default class FullPageDonationFormValuesGetPassedCorrectlyToTheDonationPage {

	description = 'Check if submitting the full page donation form values: interval, payment type and donation amount gets passed correctly to the spenden.wikimedia.de page';

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMiniBannerActionButton()
			.waitForFollowupBanner()

			.clickInterval( intervals.monthly )
			.clickAmount( amounts.one_hundred )
			.clickPaymentType( paymentTypes.paypal )
			.submitFullPageDonationForm()
			.wait( 2000 )
			.captureScreenshot( `banners/${ banner.getBannerName() }/reached_to_donation_form.png` )

		const donationForm = DonationForm.createFromBanner( banner );
		donationForm.checkForSubmittedDonationForm()
			.checkPaymentType( paymentType.paypal )
			.checkInterval( interval.monthly )
			.checkAmount( amount.one_hundred )
	}
}
