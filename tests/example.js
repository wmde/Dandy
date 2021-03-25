import createDandy from '../src/dandy';
import observer from '../src/observer';
import config from '../config/global';

( async () => {

const dandy = await createDandy( config.test_url );

dandy.goToPage( '/' )
	.waitForElement( '#app' )
	.click( 'button#next' )
	.checkElementExists( '.amount-wrapper + .help' )
	.checkElementExists( '.payment-section fieldset:last-child .help' )
	.captureScreenshot( 'donation/payment-error.png' )
	.subscribe( observer );

} )();
