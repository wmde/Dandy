// This is a command line flag reader for runTest.js.
// The command line argument order and parameter are fixed (see call to runTest in index.js),
// so we can assume the correct position and value of all parameters.

export default function extractFlagsFromNodeArgs( nodeArgs ) {
	return {
		bannerName: nodeArgs[ 3 ],
		environment: nodeArgs[ 5 ] === 'true' ? 'dev' : 'production',
		headed: nodeArgs[ 7 ] === 'true',
	};
}
