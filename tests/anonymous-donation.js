import formConfig from '../config/forms.js';
import DonationForm from '../pages/DonationForm.js';

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
