import logger from './logger';

export default {
	next: () => {},
	error: logger.logError,
	complete: () => logger.logSuccess( 'Finished' )
}