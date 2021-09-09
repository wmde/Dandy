import config from '../config/global';
import createDandy from '../src/Dandy';

( async () => {
	let dandy = await createDandy( config.test_url );

	dandy.goToPage( '/' )
		.waitForElement( '.cookie-notice' )
		.click( '.cookie-notice-button.accept' )
		.wait( 1000 );

	config.pages.forEach( page => {
		dandy = dandy.goToPage( page.url )
			.captureScreenshot( `pages/${ page.name }.png` )
			.checkElementDoesNotExist( '.page-not-found' );
	} );

	dandy.run();
} )();
