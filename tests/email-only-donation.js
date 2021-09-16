import { email, first_name, last_name } from '../config/global';
import formConfig from '../config/forms';
import DonationForm from '../pages/DonationForm';

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
