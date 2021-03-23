import config from '../config';
import createDandy from '../src/dandy';
import observer from '../src/observer';

( async () => {
	const dandy = await createDandy( config.test_url );

	config.pages.forEach( page => {
		dandy.goToPage( page.url )
			.elementDoesNotExist( '.404' )
	} );

	dandy.subscribe( observer );
} )();

