import MobileBanner from '../../../pages/MobileBanner.js';
import { bannerConfig } from '../../../config/banners.js';

const url = 'http://localhost:8084/mobile/wiki/Wikipedia:Hauptseite';
const parameters = {
	devbanner: 'B22_WMDE_Mobile_Test_05_ctrl',
	useskin: 'minerva',
	banner: 'B17WMDE_webpack_prototype',
};

( async () => {
	const banner = new MobileBanner( url, bannerConfig.selectors, parameters, { viewport : { width: 460, height: 1200 } } );

	await banner.waitForBanner()
		.clickMiniBannerCloseButton()
		.wait( 100 )
		.checkBannerIsHidden()
		.captureScreenshot( 'banners/C22_WMDE_Mobile_Test_05/03-closes-from-mini-banner.png' )
		.run();
} )();
