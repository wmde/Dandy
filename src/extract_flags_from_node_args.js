export default function extractFlagsFromNodeArgs( nodeArgs ) {
	return {
		bannerName: nodeArgs[ 3 ],
		environment: nodeArgs[ 5 ] === 'true' ? 'dev' : 'production',
		headed: nodeArgs[ 7 ] === 'true',
	}
}
