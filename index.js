import fs from 'fs';
import meow from 'meow';
import { extname, basename } from 'path';
import config from './config/global';
import runTest from './src/run_test';
import logger from './src/logger';

process.env.FORCE_COLOR = '1';

const cli = meow( `
	Usage
		node -r esm index.js <TEST_NAMES>

		<TEST_NAMES> Optional list of names of the tests you want to run
		
	Examples
	$ npm run dandy pages-exist
	$ node -r esm index.js pages-exist
	`, {
	description: 'Run acceptance tests',
	input: [],
} );

( async () => {
	let files = fs.readdirSync( config.tests_directory )
		.filter( file => extname( file ) === '.js' );

	if( cli.input.length > 0 ) {
		files = files.filter( file => cli.input.includes( basename( file, extname( file ) ) ) );
	}

	for( let index = 0; index < files.length; index++ ) {
		logger.logBold( `Running: ${ files[ index ] }` );
		const output = await runTest( `${ config.tests_directory }/${ files[ index ] }` );
		console.log( output );
	}
} )();