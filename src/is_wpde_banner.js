import { bannerConfig } from '../config/banners.js';

export default function isWPDEBanner( bannerName ) {
	return bannerName.includes( bannerConfig.banner_keywords.wpde );
}
