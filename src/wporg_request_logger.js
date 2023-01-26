const beaconEventUrl = 'https://intake-analytics.wikimedia.org/v1/events?hasty=true';

export const wporgRequestLogger = {
	log: async request => {
		if ( request.url() === beaconEventUrl ) {
			const data = JSON.parse( request.postData() );
			if ( data.schema === 'WMDEBannerSizeIssue' ) {
				let event;
				if ( data.event.bannerName.startsWith( 'org-' ) ) {
					event = 'size_issue';
				} else {
					event = data.event.bannerName.split( '-org' )[ 0 ];
				}
				return Promise.resolve( {
					event,
					data: data.event,
				} );
			}
			if ( data.schema === 'WMDEBannerEvents' ) {
				return Promise.resolve( {
					event: data.event.bannerAction,
					data: data.event,
				} );
			}
			return Promise.resolve( null );
		}
	},
};
