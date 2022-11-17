import extractFlagsFromNodeArgs from './extract_flags_from_node_args.js';
import buildUrl from './build_url.js';
import isMobileBanner from './is_mobile_banner.js';

export default function buildBannerTestConfig( nodeArguments ) {
	const flags = extractFlagsFromNodeArgs( nodeArguments );
	const { url, parameters } = buildUrl( flags.bannerName, flags.environment );

	return {
		bannerName: flags.bannerName,
		environment: flags.environment,
		url,
		parameters,
		options: {
			headless: !flags.headed,
			viewport : { width: isMobileBanner( flags.bannerName ) ? 460 : 1000, height: 1200 }
		}
	};
}