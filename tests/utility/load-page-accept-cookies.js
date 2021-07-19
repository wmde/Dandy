export default async function( dandy, path ) {
	return dandy.goToPage( path )
		.waitForElement( '#app' )
		.waitForElement( '.cookie-notice' )
		.click( '.cookie-notice-button.accept' );
};
