import { email, first_name, last_name } from '../config/global.js';
import formConfig from '../config/forms.js';
import DonationForm from '../pages/DonationForm.js';

( async () => {
	const page = new DonationForm( formConfig.forms.email.selector );

	await page.acceptCookies()
		.selectAmountFive()
		.selectIntervalOnce()
		.selectPaymentBankTransfer()

		.submitPayment()

		.selectAddressTypeEmail()
		.selectSalutationMr()
		.selectTitleDoctor()
		.setFirstNameTo( first_name )
		.setLastNameTo( last_name )
		.setEmailTo( email )

		.submitForm()

		.checkIsOnSuccessPage()
		.captureScreenshot( 'donation/email-only.png' )

		.run();
} )();
