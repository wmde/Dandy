import createDandy from '../src/dandy';
import config from '../config/global';
import observer from '../src/observer';

( async () => {
	let dandy = await createDandy( config.test_url );

	config.pages.forEach( page => {
		dandy = dandy.goToPage( page.url )
			.captureScreenshot( `pages/${ page.name }.png` )
			.checkElementDoesNotExist( '.page-not-found' );
	} );

	dandy.subscribe( observer );
} )();

