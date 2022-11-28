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
		--dev, -d  Use your local development environment instead of production (It must be running, but banner tests are faster)
		--headed, -h  Run the tests in a Chromium window instead of headless
		
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
		$ npm run dandy -- -b B22_WMDE_Mobile_Test_05_var
		or
		$ node index.js -b B22_WMDE_Mobile_Test_05_var
		
		Run a single test for a banner:
		$ npm run dandy banner-loads -- -b B22_WMDE_Mobile_Test_05_var
		or
		$ node index.js banner-loads -b B22_WMDE_Mobile_Test_05_var
	
	`, {
	importMeta: import.meta,
	description: 'Run acceptance tests',
	input: [],
	flags: {
		banner: {
			type: 'string',
			alias: 'b'
		},
		dev: {
			type: 'boolean',
			alias: 'd',
			default: false
		},
		headed: {
			type: 'boolean',
			alias: 'h',
			default: false
		}
	}
} );

( async () => {
	const isBanner = cli.flags.banner !== undefined;

	if ( isBanner ) {
		const tests = cli.input;

		for( let index = 0; index < tests.length; index++ ) {
			logger.logBold( `Running: ${ tests[ index ] }` );
			const output = await runTest( `${ config.banners_directory }/${ tests[ index ] } -b ${ cli.flags.banner } -e ${ cli.flags.dev } -h ${ cli.flags.headed }` );
			console.log( output );
		}

	} else {
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
	}

} )();