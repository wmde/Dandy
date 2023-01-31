import yaml from 'yaml';
import fs from 'fs';

export default async function loadFeatures( featureSet ) {

	const configuration = yaml.parse( fs.readFileSync( 'banner_features.yaml', { encoding: 'utf8' } ) );
	const uniqueTests = {};

	if ( 'extends' in featureSet && featureSet.extends !== null ) {
		let extendedFeatureSets = featureSet.extends;
		for ( let i = 0; i < extendedFeatureSets.length; i++ ) {
			let extendedFeatureSet = extendedFeatureSets[ i ];
			let extendedFeatures = configuration[ extendedFeatureSet ].features;
			for ( let j = 0; j < extendedFeatures.length; j++ ) {
				checkIfTestWasAlreadyAdded( uniqueTests, `../features/${extendedFeatures[ j ]}.js` );
				const extendedFeature = await import( `../features/${extendedFeatures[ j ]}.js` );
				uniqueTests[ `../features/${extendedFeatures[ j ]}.js` ] = extendedFeature.default;
			}
		}
	}

	for ( let i = 0; i < featureSet.features.length; i++ ) {
		checkIfTestWasAlreadyAdded( uniqueTests, `../features/${featureSet.features[ i ]}.js` );
		const feature = await import( `../features/${featureSet.features[ i ]}.js` );
		uniqueTests[ `../features/${featureSet.features[ i ]}.js` ] = feature.default;
	}

	return Object.values( uniqueTests );
}

function checkIfTestWasAlreadyAdded( uniqueTests, test ) {
	if ( test in uniqueTests ) {
		throw new Error( `This test has been added already : ${test}` );
	}
}
