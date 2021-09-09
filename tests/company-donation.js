import { company, street, post_code, city, country, email } from '../config/global';
import formConfig from '../config/forms';
import DonationForm from '../pages/DonationForm';

( async () => {
	const page = new DonationForm( formConfig.forms.company.selector );

	await page.acceptCookies()
		.selectAmountFive()
		.selectIntervalOnce()
		.selectPaymentBankTransfer()

		.submitPayment()

		.selectAddressTypeCompany()
		.setCompanyNameTo( company )
		.setStreetTo( street )
		.setPostCodeTo( post_code )
		.setCityTo( city )
		.setCountryTo( country )
		.setEmailTo( email )

		.submitForm()

		.checkIsOnSuccessPage()
		.captureScreenshot( 'donation/company.png' )

		.run();
} )();
