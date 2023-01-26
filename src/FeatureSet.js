import logger from './logger.js';

export default class FeatureSet {
	constructor( description, features ) {
		this.description = description;
		this.features = features;
	}

	async runTests( banner ) {
		logger.logStep( this.description );
		for ( let i = 0; i < this.features.length; i++ ) {
			const feature = this.features[ i ];
			logger.logStep( feature.description );
			await feature.runSteps( banner );
		}
		logger.logStep( 'SUCCESS!' );
	}
}
