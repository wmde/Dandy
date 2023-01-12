import { amounts, intervals, paymentTypes } from '../config/banners';
export default class FullPageDonationFormValuesGetPassedCorrectlyToTheSpendenPage {

	description = 'Check if submitting the full page donation form values: interval, payment type and donation amount gets passed correctly to the spenden.wikimedia.de page';

	/**
	 *
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMiniBannerButton()
			.waitForFollowupBanner()
			.clickInterval( intervals.annually )
			.clickAmount( amounts.one_hundred )
			.clickPaymentType( paymentTypes.paypal )
			.submitFullPageDonationForm()

			.wait( 3000 )

			.checkForSubmittedDonationForm()
			.checkInterval( intervals.annually )
			.checkAmount( amounts.one_hundred )
			.checkPaymentType( paymentTypes.paypal )
	}
}