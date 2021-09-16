import { city, company, country, email, iban, post_code, street } from '../config/global';
import MembershipForm from '../pages/MembershipForm';

( async () => {
	const form = new MembershipForm();

	await form.acceptCookies()
		.selectMembershipTypeActive()
		.selectAddressTypeCompany()
		.setCompanyNameTo( company )
		.setStreetTo( street )
		.setPostCodeTo( post_code )
		.setCityTo( city )
		.setCountryTo( country )
		.setEmailTo( email )

		.submitAddress()

		.selectIntervalMonthly()
		.selectAmountFifteen()
		.setIbanTo( iban )

		.submitForm()

		.checkIsOnSuccessPage()
		.captureScreenshot( 'membership/company.png' )

		.run();
} )();
