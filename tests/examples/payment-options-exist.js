import createDandy from '../../src/dandy';
import config from '../../config/global';
import formConfig from '../../config/forms'
import messages from 'wmde-fundraising-frontend-content/i18n/de_DE/messages/paymentTypes.json';

( async () => {
	const dandy = await createDandy( config.test_url );
	const paymentRadios = formConfig.fields.payment.radios;

	dandy.goToPage( '/' )
		.waitForElement( config.app_selector )
		.checkElementExists( paymentRadios.direct_debit.selector )
		.checkElementContainsText( paymentRadios.direct_debit.label_selector, messages[ paymentRadios.direct_debit.language_item ] )

		.checkElementExists( paymentRadios.bank_transfer.selector )
		.checkElementContainsText( paymentRadios.bank_transfer.label_selector, messages[ paymentRadios.bank_transfer.language_item ] )

		.checkElementExists( paymentRadios.credit_card.selector )
		.checkElementContainsText( paymentRadios.credit_card.label_selector, messages[ paymentRadios.credit_card.language_item ] )

		.checkElementExists( paymentRadios.paypal.selector )
		.checkElementContainsText( paymentRadios.paypal.label_selector, messages[ paymentRadios.paypal.language_item ] )

		.checkElementExists( paymentRadios.sofort.selector )
		.checkElementContainsText( paymentRadios.sofort.label_selector, messages[ paymentRadios.sofort.language_item ] )

		.run();
} )();
