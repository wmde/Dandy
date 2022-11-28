export const bannerConfig = {
	banner_keywords: {
		mobile_de: 'Mobile_Test',
		mobile_en: 'Mobile_EN_Test',
		wpde: 'WPDE',
		desktop_en: 'Test_EN',
	},
	urls: {
		desktop: {
			production: 'https://de.wikipedia.org/wiki/Wikipedia:Hauptseite',
			dev: 'http://localhost:8084/wiki/Wikipedia:Hauptseite'
		},
		mobile: {
			production: 'https://de.wikipedia.org/wiki/Wikipedia:Hauptseite',
			dev: 'http://localhost:8084/mobile/wiki/Wikipedia:Hauptseite'
		},
		desktop_en: {
			production: 'https://en.wikipedia.org/wiki/Main_Page',
			dev: 'http://localhost:8084/wiki/Main_Page'
		},
		mobile_en: {
			production: 'https://en.wikipedia.org/wiki/Main_Page',
			dev: 'http://localhost:8084/en-mobile/wiki/Main_Page'
		},
		wpde: {
			production: 'https://www.wikipedia.de',
			dev: 'http://localhost:8084/wikipedia.de',
		}
	},
	selectors: {
		banner_visible: '.banner-position--state-finished',
		banner_hidden: '.wmde-banner--hidden',
		followup_visible: '.wmde-banner-followup-banner-position--state-finished',
		close_button: {
			mini: '.wmde-banner-mini-close-button',
			full: '.wmde-banner-full-close'
		},
		submit_button: {
			mini: '.wmde-banner-mini-button',
			form: '.wmde-banner-form-button'
		},
		donation_form: {
			interval: {
				once: '.select-interval-0 label',
				monthly: '..select-interval-1 label',
				yearly: '..select-interval-12 label',
				disabled: {
					once: '.select-interval-0.wmde-banner-disabled input[disabled]',
					monthly: '.select-interval-1.wmde-banner-disabled input[disabled]',
					yearly: '.select-interval-12.wmde-banner-disabled input[disabled]',
				}
			},
			amount: {
				five: '.select-amount-5 label',
				fifteen: '.select-amount-15 label',
				twenty_five: '.select-amount-25 label',
				fifty: '.select-amount-50 label',
				one_hundred: '.select-amount-100 label',
			},
			payment_type: {
				paypal: '.select-payment-method-PPL label',
				credit_card: '.select-payment-method-MCP label',
				direct_debit: '.select-payment-method-BEZ label',
				bank_transfer: '.select-payment-method-UEB label',
				sofort: '.select-payment-method-SUB label',
			}
		}
	}
};
