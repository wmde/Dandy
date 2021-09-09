import formConfig from '../config/forms'
import DonationForm from '../pages/DonationForm';

( async () => {
	const page = new DonationForm( formConfig.forms.anonymous.selector );

	await page.acceptCookies()
		.selectAmountFive()
		.selectIntervalOnce()
		.selectPaymentBankTransfer()

		.submitPayment()

		.selectAddressTypeAnonymous()

		.submitForm()

		.checkIsOnSuccessPage()
		.captureScreenshot( 'donation/anonymous.png' )

		.run();
} )();
