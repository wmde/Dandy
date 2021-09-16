import chalk from 'chalk';

const log = message => {
	logWithTime( message );
}

const logBold = message => {
	logWithTime( chalk.bold( message ) );
}

const logSuccess = message => {
	logWithTime( chalk.green( message ) );
}

const logError = message => {
	logWithTime( chalk.red( message ) );
}

const logWithTime = message => {
	console.log( chalk.gray( currentTime() ) + ' ' + message );
}

const currentTime = () => {
	let currentDate = new Date();
	return currentDate.getHours().toString().padStart( 2, '0' )
		+ ':' + currentDate.getMinutes().toString().padStart( 2, '0' )
		+ ':' + currentDate.getSeconds().toString().padStart( 2, '0' );
}

export default {
	log,
	logBold,
	logSuccess,
	logError,
}
