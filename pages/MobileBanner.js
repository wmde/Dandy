import Banner from './Banner.js';

export default class MobileBanner extends Banner {
	selectors;

	constructor( url, selectors, parameters = {}  ) {
		super( url, parameters );
		this.selectors = selectors;

		this.dandy.goToPage( '/?' + this.parameters.toString() );
	}
}
