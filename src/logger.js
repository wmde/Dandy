import chalk from 'chalk';

/* eslint-disable no-console */

const currentTime = () => {
	let currentDate = new Date();
	return currentDate.getHours().toString().padStart( 2, '0' )
		+ ':' + currentDate.getMinutes().toString().padStart( 2, '0' )
		+ ':' + currentDate.getSeconds().toString().padStart( 2, '0' );
};

const logWithTime = message => {
	console.log( chalk.gray( currentTime() ) + ' ' + message );
};

const log = message => {
	logWithTime( message );
};

const logBold = message => {
	logWithTime( chalk.bold( message ) );
};

const logSuccess = message => {
	logWithTime( chalk.green( message ) );
};

const logError = message => {
	logWithTime( chalk.red( message ) );
};

const logDebug = ( message, context ) => {
	console.log( ...[
		chalk.gray( currentTime() ) + ' ' + chalk.cyan( message ),
		...context,
	] );
};

const logStep = message => {
	logWithTime( chalk.blue( message ) );
};

export default {
	log,
	logBold,
	logDebug,
	logSuccess,
	logError,
	logStep,
};
