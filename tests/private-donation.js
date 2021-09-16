import { first_name, last_name, street, post_code, city, country, email } from '../config/global';
import formConfig from '../config/forms';
import DonationForm from '../pages/DonationForm';

( async () => {
	const page = new DonationForm( formConfig.forms.private.selector );

	await page.acceptCookies()
		.selectAmountFive()
		.selectIntervalOnce()
		.selectPaymentBankTransfer()

		.submitPayment()

		.selectAddressTypePerson()
		.selectSalutationMr()
		.selectTitleDoctor()
		.setFirstNameTo( first_name )
		.setLastNameTo( last_name )
		.setStreetTo( street )
		.setPostCodeTo( post_code )
		.setCityTo( city )
		.setCountryTo( country )
		.setEmailTo( email )

		.submitForm()

		.checkIsOnSuccessPage()
		.captureScreenshot( 'donation/private.png' )

		.run();
} )();
