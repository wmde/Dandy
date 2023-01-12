export default class SubmittingEnglishBannerLeadsToENSpendenPage {

	description = 'Does submitting an english banner leads to https://spenden.wikimedia.de with &locale=en_GB';

	/**
	 *
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.clickMiniBannerButton()
			.waitForFollowupBanner()
			.clickAmount( amounts.one_hundred )
			.clickPaymentType( paymentTypes.paypal )
			.clickInterval( intervals.monthly )
			.submitFullPageDonationForm()

			.wait( 3000 )

			.checkIfSubmittingTheBannerDonationFormLeadsToSpendenPageWithCorrectCorrespoindingLanguage( banner.getBannerName() )

			.checkForSubmittedDonationForm()
			.checkPaymentType( paymentTypes.paypal )
			.checkInterval( intervals.monthly )
			.checkAmount( amounts.one_hundred )
	}
}