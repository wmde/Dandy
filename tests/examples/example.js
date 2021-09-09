import createDandy from '../../src/dandy';
import config from '../../config/global';
import loadPageAcceptCookies from '../utility/load-page-accept-cookies';

( async () => {

	const dandy = await createDandy( config.test_url, { headless: false } );
	await loadPageAcceptCookies( dandy, '/' );

	dandy.wait( 1000 )
		.click( 'button#next' )
		.waitForElement( '.amount-wrapper + .help' )
		.checkElementExists( '.payment-section fieldset:last-child .help' )
		.captureScreenshot( 'donation/payment-error.png' )
		.run();

} )();
