import buildUrl from './build_url.js';
import isMobileBanner from './is_mobile_banner.js';

export default function buildBannerTestConfig( bannerName, environment, headed ) {
	const { url, parameters } = buildUrl( bannerName, environment );

	return {
		bannerName: bannerName,
		environment: environment,
		url,
		parameters,
		options: {
			headless: !headed,
			viewport: { width: isMobileBanner( bannerName ) ? 460 : 1200, height: 1200 },
		},
	};
}
