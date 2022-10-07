import fs from 'fs';
import meow from 'meow';
import { extname, basename } from 'path';
import config from './config/global.js';
import runTest from './src/run_test.js';
import logger from './src/logger.js';

process.env.FORCE_COLOR = '1';

const cli = meow( `
	Usage
		node index.js <TEST_NAMES>
		node index.js -b <BANNER_NAME> <TEST_NAMES>

		<TEST_NAMES> Optional list of names of the tests you want to run
		<BANNER_NAME> When you want to run tests for a banner pass the name through a flag
		
	Options
		--banner, -b  Pass a banner name into Dandy to let it know you want to run tests on a single banner
		
	Examples
		Run all tests:
		$ npm run dandy
		or
		$ node index.js
		
		Run a single test:
		$ npm run dandy pages-exist
		or
		$ node index.js pages-exist
		
		Run all tests for a banner:
		$ npm run dandy -- -b C22_WMDE_Mobile_Test_05
		or
		$ node index.js -b C22_WMDE_Mobile_Test_05
		
		Run a single test for a banner:
		$ npm run dandy 01-banner-loads -- -b C22_WMDE_Mobile_Test_05
		or
		$ node index.js 01-banner-loads -b C22_WMDE_Mobile_Test_05
	
	`, {
	importMeta: import.meta,
	description: 'Run acceptance tests',
	input: [],
	flags: {
		banner: {
			type: 'string',
			alias: 'b'
		}
	}
} );

( async () => {
	const isBanner = cli.flags.banner !== undefined;
	const testDirectory = isBanner ? `${ config.banners_directory }/${ cli.flags.banner }` : config.tests_directory;

	let files = fs.readdirSync( testDirectory )
		.filter( file => extname( file ) === '.js' );

	if( cli.input.length > 0 ) {
		files = files.filter( file => cli.input.includes( basename( file, extname( file ) ) ) );
	}

	for( let index = 0; index < files.length; index++ ) {
		logger.logBold( `Running: ${ files[ index ] }` );
		const output = await runTest( `${ testDirectory }/${ files[ index ] }` );
		console.log( output );
	}
} )();