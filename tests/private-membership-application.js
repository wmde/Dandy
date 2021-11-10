import { first_name, last_name, street, post_code, city, country, birth_date, email, iban } from '../config/global.js';
import MembershipForm from '../pages/MembershipForm.js';

( async () => {
	const form = new MembershipForm();

	await form.acceptCookies()
		.selectMembershipTypeActive()
		.selectAddressTypePerson()
		.selectSalutationMr()
		.setFirstNameTo( first_name )
		.setLastNameTo( last_name )
		.setStreetTo( street )
		.setPostCodeTo( post_code )
		.setCityTo( city )
		.setCountryTo( country )
		.setBirthDateTo( birth_date )
		.setEmailTo( email )

		.submitAddress()

		.selectIntervalMonthly()
		.selectAmountFifteen()
		.setIbanTo( iban )

		.submitForm()

		.checkIsOnSuccessPage()
		.captureScreenshot( 'membership/private.png' )

		.run();
} )();
