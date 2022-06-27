import Page from './Page.js';
import config from '../config/global.js';
import formConfig from '../config/forms.js';

export default class DonationForm extends Page {

	form;

	constructor( form, parameters = {}  ) {
		super( parameters );
		this.form = form;
		this.dandy.goToPage( '/?' + this.parameters.toString() )
			.waitForElement( config.app_selector );
	}

	formSelector() {
		return this.form + ' ';
	}

	selectAmountFive() {
		this.dandy.click( formConfig.fields.amount.radios.five.label_selector );
		return this;
	}

	selectIntervalOnce() {
		this.dandy.click( formConfig.fields.interval.radios.once.selector );
		return this;
	}

	selectPaymentBankTransfer() {
		this.dandy.click( formConfig.fields.payment.radios.bank_transfer.selector );
		return this;
	}

	submitPayment() {
		this.dandy.click( formConfig.buttons.next.selector )
			.waitForElement( formConfig.address_page.selector );
		return this;
	}

	selectAddressTypePerson() {
		this.dandy.click( formConfig.fields.address_type.radios.full.selector )
			.click( formConfig.fields.address_type_internal.radios.person.selector );
		return this;
	}

	selectAddressTypeCompany() {
		this.dandy.click( formConfig.fields.address_type.radios.full.selector )
			.click( formConfig.fields.address_type_internal.radios.company.selector )
		return this;
	}

	selectAddressTypeEmail() {
		this.dandy.click( formConfig.fields.address_type.radios.email.selector );
		return this;
	}

	selectAddressTypeAnonymous() {
		this.dandy.click( formConfig.fields.address_type.radios.anonymous.selector );
		return this;
	}

	selectSalutationMr() {
		this.dandy.click( this.formSelector() + formConfig.fields.salutation.radios.mr.selector );
		return this;
	}

	selectTitleDoctor() {
		this.dandy.selectOption( this.formSelector() + formConfig.fields.title.selector, formConfig.fields.title.options.dr );
		return this;
	}

	setCompanyNameTo( companyName ) {
		this.dandy.setInputText( this.formSelector() + formConfig.fields.company_name.selector, companyName );
		return this;
	}

	setFirstNameTo( firstName ) {
		this.dandy.setInputText( this.formSelector() + formConfig.fields.first_name.selector, firstName );
		return this;
	}

	setLastNameTo( lastName ) {
		this.dandy.setInputText( this.formSelector() + formConfig.fields.last_name.selector, lastName );
		return this;
	}

	setStreetTo( street ) {
		this.dandy.setInputText( this.formSelector() + formConfig.fields.street.selector, street );
		return this;
	}

	setPostCodeTo( postCode ) {
		this.dandy.setInputText( this.formSelector() + formConfig.fields.post_code.selector, postCode );
		return this;
	}

	setCityTo( city ) {
		this.dandy.setInputText( this.formSelector() + formConfig.fields.city.selector, city );
		return this;
	}

	setCountryTo( country ) {
		this.dandy.setInputText( this.formSelector() + formConfig.fields.country.selector, country );
		return this;
	}

	setEmailTo( email ) {
		this.dandy.setInputText( this.formSelector() + formConfig.fields.email.selector, email );
		return this;
	}

	submitForm() {
		this.dandy.clickSubmit( formConfig.buttons.submit.selector )
			.waitForElement( config.app_selector );
		return this;
	}

	checkIsOnSuccessPage() {
		this.dandy.checkElementExists( formConfig.success.donation.selector );
		return this;
	}

}
