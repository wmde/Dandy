import config from './config';
import observer from './src/observer';
import createDandy from './src/dandy';

( async () => {
	const dandy = await createDandy( config.test_url );

	dandy.goToPage( '/' )
		.waitForElement( '#app' )
		.elementExists( '#app' )
		.elementDoesNotExist( '#app-not-exists' )
		.screenshot( 'test/test.png' )
		.subscribe( observer );
} )();

