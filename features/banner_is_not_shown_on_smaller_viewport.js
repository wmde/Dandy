export default class BannerIsNotShownOnSmallerViewport {

	description = 'Banner is not shown on smaller viewport';

	/**
	 *
	 * @param { Banner } banner
	 */
	runSteps( banner ) {
		banner.setViewPort( 550, 800 )
			.reload()	//Reload to trigger size issue check
			.wait( 1000 )
			.reload()	//Reload to force flushing of events
			.checkEventWasFired( 'size_issue' )
			.resetViewPort()
	}
}