import createDandy from '../../src/dandy.js';
import config from '../../config/global.js';

( async () => {

	const dandy = await createDandy( config.test_url, { headless: false } );

	dandy.wait( 1000 )
		.click( 'button#next' )
		.waitForElement( '.amount-wrapper + .help' )
		.checkElementExists( '.payment-section fieldset:last-child .help' )
		.captureScreenshot( 'donation/payment-error.png' )
		.run();

} )();
