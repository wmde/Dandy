import createDandy from '../../src/dandy';
import config from '../../config/global';
import formConfig from '../../config/forms'
import messages from 'wmde-fundraising-frontend-content/i18n/de_DE/messages/messages_laika.json';

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

		.checkElementExists( formConfig.success.donation.payment_notice.selector )
		.checkElementContainsText(
			formConfig.success.donation.payment_notice.selector,
			messages[ formConfig.success.donation.payment_notice.language_items.bank_transfer ]
		)

		.checkElementExists( formConfig.success.donation.bank_data.selector )

		.run();
} )();
