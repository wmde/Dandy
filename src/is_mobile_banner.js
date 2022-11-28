import { bannerConfig } from '../config/banners.js';

export default function isMobileBanner( bannerName ) {
	return bannerName.includes( bannerConfig.banner_keywords.mobile_de ) || bannerName.includes( bannerConfig.banner_keywords.mobile_en );
}
