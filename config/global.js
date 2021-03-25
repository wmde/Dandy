export default {
	production_url: 'https://spenden.wikimedia.de',
	test_url: 'https://test-spenden-2.wikimedia.de',
	screenshots_directory: './screenshots',
	tests_directory: './tests',
	app_selector: '#app',
	pages: [
		{
			name: 'Donation',
			url: '/'
		},
		{
			name: 'Membership',
			url: '/apply-for-membership'
		},
		{
			name: 'FAQ',
			url: '/faq'
		},
		{
			name: 'Use of Funds',
			url: '/use-of-funds'
		},
		{
			name: 'Contact',
			url: '/contact/get-in-touch'
		},
		{
			name: 'Impressum',
			url: '/page/Impressum'
		},
		{
			name: 'Datenschutz',
			url: '/page/Datenschutz'
		},
		{
			name: 'Hall of Fame',
			url: '/page/hall-of-fame'
		},
		{
			name: 'List Comments',
			url: '/list-comments.html'
		}
	],
	fields: {
		payment: {},
		address: {}
	}
};