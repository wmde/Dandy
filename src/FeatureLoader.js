export default async function loadFeatures( featureNames ) {
	const features = [];
	for( let i=0; i < featureNames.length; i++ ) {
		const feature = await import( `../features/${featureNames[i]}.js` );
		features.push(feature)
	}
	return features;
}


