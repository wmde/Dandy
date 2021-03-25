import createDandy from '../src/dandy';
import observer from '../src/observer';
import config from '../config/global';
import formConfig from '../config/forms';
import messages from 'wmde-fundraising-frontend-content/i18n/de_DE/messages/messages_laika.json';

( async () => {
	const dandy = await createDandy( config.test_url );
	const intervalRadios = formConfig.fields.interval.radios;

	dandy.goToPage( '/' )
		.waitForElement( config.app_selector )

		.checkElementExists( intervalRadios.once.selector )
		.checkElementContainsText( intervalRadios.once.label_selector, messages[ intervalRadios.once.language_item ] )

		.checkElementExists( intervalRadios.monthly.selector )
		.checkElementContainsText( intervalRadios.monthly.label_selector, messages[ intervalRadios.monthly.language_item ] )

		.checkElementExists( intervalRadios.quarterly.selector )
		.checkElementContainsText( intervalRadios.quarterly.label_selector, messages[ intervalRadios.quarterly.language_item ] )

		.checkElementExists( intervalRadios.half_yearly.selector )
		.checkElementContainsText( intervalRadios.half_yearly.label_selector, messages[ intervalRadios.half_yearly.language_item ] )

		.checkElementExists( intervalRadios.yearly.selector )
		.checkElementContainsText( intervalRadios.yearly.label_selector, messages[ intervalRadios.yearly.language_item ] )

		.subscribe( observer );
} )();
