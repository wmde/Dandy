import fs from 'fs';
import meow from 'meow';
import yaml from 'yaml';
import { extname, basename } from 'path';
import config from './config/global.js';
import runTest from './src/run_test.js';
import logger from './src/logger.js';

import Banner from './pages/Banner.js';
import buildBannerTestConfig from './src/build_banner_test_config.js';
import {bannerConfig} from "./config/banners.js";
import loadFeatures from "./src/FeatureLoader.js";

process.env.FORCE_COLOR = '1';

const cli = meow( `
	Usage
		node index.js <TEST_NAMES>
		node index.js -b <BANNER_NAME> <BANNER_FEATURES_NAME>

		<TEST_NAMES> Optional list of names of the tests you want to run
		<BANNER_NAME> When you want to run tests for a banner pass the name through a flag
		<BANNER_FEATURES_NAME> This is the name of 'feature set' that you want to test from banner_features.yaml
		
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
		
		Run a single test for a banner:
		$ npm run dandy -- -b B22_WMDE_Mobile_Test_05_var mobile_banner
		or
		$ node index.js -b B22_WMDE_Mobile_Test_05_var mobile_banner
	
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
		const featureSets = cli.input;
		console.log( 'featureSets => ' ,featureSets );
		const configuration = yaml.parse( fs.readFileSync( 'banner_features.yaml', { encoding:'utf8' }) );
		console.log( 'configuration => ' ,configuration );
		console.log('cli.flags.banner ==>', cli.flags.banner);
		const testConfig = buildBannerTestConfig( cli.flags.banner );
		const banner = new Banner( testConfig.url, bannerConfig.selectors, testConfig.parameters, testConfig.options );
		for( let index = 0; index < featureSets.length; index++ ) {
			const featureSet = featureSets[ index ];
			console.log( 'featureSet => ' ,featureSet );
			if( !configuration[ featureSet ] ) {
				logger.logError( `${ featureSet } NOT found` );
				continue;
			}
			logger.logBold( `Running: ${ configuration[ featureSet ].description }` );
			const features = await loadFeatures( configuration[ featureSet ].features );

			for ( let j = 0; j < features.length; j++ ) {
				console.log('features[j] ==>', features[j])
				const testClass = new features[j]();
				testClass.runSteps( banner );
				//await banner.run();
			}
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