import createDandy from '../src/dandy';
import observer from '../src/observer';
import config from '../config/global';
import formConfig from '../config/forms'

( async () => {
	const dandy = await createDandy( config.test_url );

	dandy.goToPage( '/' )
		.waitForElement( config.app_selector )

		.click( formConfig.fields.amount.radios.five.label_selector )
		.click( formConfig.fields.interval.radios.once.selector )
		.click( formConfig.fields.payment.radios.bank_transfer.selector )
		.click( formConfig.buttons.next.selector )

		.waitForElement( formConfig.address_page.selector )

		.click( formConfig.fields.address_type.radios.anonymous.selector )
		.click( formConfig.buttons.submit.selector )

		.captureScreenshot( 'donation/anonymous.png' )

		.checkElementExists( formConfig.buttons.address_change.selector )

		.subscribe( observer );
} )();
