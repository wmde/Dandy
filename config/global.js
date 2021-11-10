const config = {
	production_url: 'https://spenden.wikimedia.de',
	test_url: 'https://test-spenden-2.wikimedia.de',
	local_url: 'http://localhost:8082',
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
	user: {
		first_name: 'The',
		last_name: 'Doctor',
		company: 'Tardis Co Ltd',
		street: 'Tardis 11',
		post_code: '10963',
		city: 'Berlin',
		country: 'Deutschland',
		email: 'spenden-testing@wikimedia.de',
		iban: 'DE12500105170648489890',
		birth_date: '11.11.1980',
	},
	fields: {
		payment: {},
		address: {}
	}
};

export default config;

export const {
	first_name,
	last_name,
	company,
	street,
	post_code,
	city,
	country,
	email,
	iban,
	birth_date,
} = config.user;