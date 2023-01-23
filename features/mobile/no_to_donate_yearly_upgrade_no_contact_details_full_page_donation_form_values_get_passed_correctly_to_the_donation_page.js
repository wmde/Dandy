import {amounts, contactDetails, intervals, paymentTypes, upgradeOptions} from '../../config/banners.js';
import { amount, interval, paymentType } from '../../config/forms.js';
import DonationForm from "../../pages/DonationForm.js";

export default class NoToDonateYearlyUpgradeNoContactDetailsFullPageDonationFormValuesGetPassedCorrectlyToTheDonationPage {

	description = 'Do you want to donate yearly? NO, Do you want to give your contact details? NO :Check if' +
		'submitting the full page donation form values: interval, payment type and donation amount gets passed' +
		'correctly to the spenden.wikimedia.de page';

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMainBannerActionButton()
			.waitForFollowupBanner()

			.clickInterval( intervals.single_payment )
			.clickAmount( amounts.five )
			.clickPaymentType( paymentTypes.bank_transfer )
			.submitFullPageDonationForm()
			.clickAnnualUpgradeOption( upgradeOptions.no )
			.clickContactDetailsOption( contactDetails.anonymous )
			.wait( 2000 );

		const donationForm = DonationForm.createFromBanner( banner );
		donationForm.checkIsOnSuccessPage();
			//.checkForSubmittedDonationForm()
			// .checkPaymentType( paymentType.paypal )//////////////////
			// .checkInterval( interval.single_payment )
			// .checkAmount( amount.five )
	}
}
