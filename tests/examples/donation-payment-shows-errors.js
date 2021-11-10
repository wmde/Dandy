import createDandy from '../../src/dandy.js';
import config from '../../config/global.js';
import formConfig from '../../config/forms.js';
import messages from 'wmde-fundraising-frontend-content/i18n/de_DE/messages/messages_laika.json';

( async () => {
	const dandy = await createDandy( config.test_url );
	const amountError = formConfig.fields.amount.error;
	const paymentError = formConfig.fields.payment.error;

	dandy.goToPage( '/' )
		.waitForElement( config.app_selector )
		.click( formConfig.buttons.next.selector )
		.captureScreenshot( 'donation/payment-error.png' )

		.checkElementExists( amountError.selector )
		.checkElementContainsText( amountError.selector, messages[ amountError.language_item ] )

		.checkElementExists( paymentError.selector )
		.checkElementContainsText( paymentError.selector, messages[ paymentError.language_item ] )

		.run();
} )();