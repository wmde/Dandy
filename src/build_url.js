import { bannerConfig } from '../config/banners.js';
import isMobileBanner from './is_mobile_banner.js';
import isWPDEBanner from './is_wpde_banner.js';

const WP_ORG_DEV_BANNER = 'B22_WMDE_local_prototype';
const WP_DE_DEV_BANNER = 'dev-mode-wpde';

function determineUrl( bannerName, environment ) {
	if ( bannerName.includes( bannerConfig.banner_keywords.mobile_de ) ) {
		return bannerConfig.urls.mobile[ environment ];
	}

	if ( bannerName.includes( bannerConfig.banner_keywords.mobile_en ) ) {
		return bannerConfig.urls.mobile_en[ environment ];
	}

	if ( bannerName.includes( bannerConfig.banner_keywords.wpde ) ) {
		return bannerConfig.urls.wpde[ environment ];
	}

	if ( bannerName.includes( bannerConfig.banner_keywords.desktop_en ) ) {
		return bannerConfig.urls.desktop_en[ environment ];
	}

	return bannerConfig.urls.desktop[ environment ];
}

function determineParameters( bannerName, environment ) {

	let devBanner = WP_ORG_DEV_BANNER;

	if ( isWPDEBanner( bannerName ) ) {
		devBanner = WP_DE_DEV_BANNER;
	}

	const parameters = {
		banner: environment === 'production' ? bannerName : devBanner,
		devMode: 'true',
	};

	if ( environment === 'dev' ) {
		parameters.devbanner = bannerName;
	}

	if ( isMobileBanner( bannerName ) ) {
		parameters.useskin = 'minerva';
	}

	return parameters;
}

export default function buildUrl( banner, environment ) {
	return {
		url: determineUrl( banner, environment ),
		parameters: determineParameters( banner, environment ),
	};
}
