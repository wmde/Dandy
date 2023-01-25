import { exec } from 'child_process';

export default command => {
	return new Promise( ( resolve, reject ) => {
		exec( `node ${ command }`, ( error, stdout ) => {
			if ( error ) {
				reject( error );
				return;
			}
			resolve( stdout );
		} );
	} );
};
