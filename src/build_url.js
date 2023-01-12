import { bannerConfig } from '../config/banners.js';
import isMobileBanner from './is_mobile_banner.js';

const DUMMY_BANNER_NAME = 'B22_WMDE_local_prototype';

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
	const parameters = {
		banner: environment === 'production' ? bannerName : DUMMY_BANNER_NAME,
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
		parameters: determineParameters( banner, environment )
	}
}
