import Page from './Page.js';
import config from '../config/global.js';
import formConfig from '../config/forms.js';

export default class MembershipForm extends Page {

	constructor() {
		super();
		this.dandy.goToPage( '/apply-for-membership' )
			.waitForElement( config.app_selector );
	}

	selectMembershipTypeActive() {
		this.dandy.click( formConfig.fields.membership_type.radios.active.selector );
		return this;
	}

	selectAddressTypePerson() {
		this.dandy.click( formConfig.fields.address_type_membership.radios.person.selector );
		return this;
	}

	selectAddressTypeCompany() {
		this.dandy.click( formConfig.fields.address_type_membership.radios.company.selector );
		return this;
	}

	selectSalutationMr() {
		this.dandy.click( formConfig.fields.salutation.radios.mr.selector );
		return this;
	}

	selectTitleDoctor() {
		this.dandy.selectOption( formConfig.fields.title.selector, formConfig.fields.title.options.dr );
		return this;
	}

	setCompanyNameTo( companyName ) {
		this.dandy.setInputText( formConfig.fields.company_name.selector, companyName );
		return this;
	}

	setFirstNameTo( firstName ) {
		this.dandy.setInputText( formConfig.fields.first_name.selector, firstName );
		return this;
	}

	setLastNameTo( lastName ) {
		this.dandy.setInputText( formConfig.fields.last_name.selector, lastName );
		return this;
	}

	setStreetTo( street ) {
		this.dandy.setInputText( formConfig.fields.street.selector, street );
		return this;
	}

	setPostCodeTo( postCode ) {
		this.dandy.setInputText( formConfig.fields.post_code.selector, postCode );
		return this;
	}

	setCityTo( city ) {
		this.dandy.setInputText( formConfig.fields.city.selector, city );
		return this;
	}

	setCountryTo( country ) {
		this.dandy.setInputText( formConfig.fields.country.selector, country );
		return this;
	}

	setBirthDateTo( birthDate ) {
		this.dandy.setInputText( formConfig.fields.birth_date.selector, birthDate );
		return this;
	}

	setEmailTo( email ) {
		this.dandy.setInputText( formConfig.fields.email.selector, email );
		return this;
	}

	selectIntervalMonthly() {
		this.dandy.click( formConfig.fields.interval.radios.monthly.selector );
		return this;
	}

	selectAmountFifteen() {
		this.dandy.click( formConfig.fields.amount.radios.fifteen.label_selector );
		return this;
	}

	setIbanTo( iban ) {
		this.dandy.setInputText( formConfig.fields.iban.selector, iban );
		return this;
	}

	submitAddress() {
		this.dandy.click( formConfig.buttons.next.selector )
			.waitForElement( formConfig.payment_page.selector );
		return this;
	}

	submitForm() {
		this.dandy.clickSubmit( formConfig.buttons.submit.selector )
			.waitForElement( config.app_selector );
		return this;
	}

	checkIsOnSuccessPage() {
		this.dandy.checkElementExists( formConfig.success.membership.selector );
		return this;
	}

}
