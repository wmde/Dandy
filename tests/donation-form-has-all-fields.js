import config from '../config';
import createDandy from '../src/dandy';
import observer from '../src/observer';

( async () => {
	const dandy = await createDandy( config.test_url );
	dandy.subscribe( observer );
} )();
