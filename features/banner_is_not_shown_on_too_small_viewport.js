export default class BannerIsNotShownOnTooSmallViewport {

	description = 'Banner is not shown on too small viewport';

	/**
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.setViewPort( 550, 800 )
			.reload()	//Actual test starts from here
			.wait( 2000 )//1000
			.reload()	//Reload to force flushing of events
			.checkEventWasFired( 'size_issue' )
			.resetViewPort()
	}
}