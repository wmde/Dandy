import createDandy from '../src/dandy';
import config from '../config/global';
import formConfig from '../config/forms'

( async () => {
	const dandy = await createDandy( config.test_url );
	const amountRadios = formConfig.fields.amount.radios;

	dandy.goToPage( '/' )
		.waitForElement( config.app_selector )

		.checkElementExists( amountRadios.five.selector )
		.checkElementContainsText( amountRadios.five.label_selector, '5€' )

		.checkElementExists( amountRadios.fifteen.selector )
		.checkElementContainsText( amountRadios.fifteen.label_selector, '15€' )

		.checkElementExists( amountRadios.twenty_five.selector )
		.checkElementContainsText( amountRadios.twenty_five.label_selector, '25€' )

		.checkElementExists( amountRadios.fifty.selector )
		.checkElementContainsText( amountRadios.fifty.label_selector, '50€' )

		.checkElementExists( amountRadios.seventy_five.selector )
		.checkElementContainsText( amountRadios.seventy_five.label_selector, '75€' )

		.checkElementExists( amountRadios.one_hundred.selector )
		.checkElementContainsText( amountRadios.one_hundred.label_selector, '100€' )

		.checkElementExists( amountRadios.two_hundred_and_fifty.selector )
		.checkElementContainsText( amountRadios.two_hundred_and_fifty.label_selector, '250€' )

		.checkElementExists( amountRadios.three_hundred.selector )
		.checkElementContainsText( amountRadios.three_hundred.label_selector, '300€' )

		.run();
} )();
