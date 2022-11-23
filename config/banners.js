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
		banner_soft_close: '.wmde-banner--soft-closing',
		followup_visible: '.wmde-banner-followup-banner-position--state-finished',
		animated_text_highlight: {
			mini_slider: '.wmde-banner-slider-text-animated-highlight',
			full: '.wmde-banner-text-animated-highlight'
		},
		close_button: {
			desktop: '.wmde-banner-close-link',
			mini: '.wmde-banner-mini-close-button',
			full: '.wmde-banner-full-close'
		},
		submit_button: {
			mini: '.wmde-banner-mini-button',
			form: '.wmde-banner-form-button',
			form_step_1: '.wmde-banner-form-step-1 .wmde-banner-form-button',
			form_step_2: '.wmde-banner-form-step-2 .wmde-banner-form-button',
		},
		use_of_funds: {
			link: '.wmde-banner-footer-usage-link',
			modal_is_open: '.banner_modal.is-visible',
			call_to_action: '.use_of_funds__button',
			elements: {
				top_section: '.use_of_funds__section',
				text: '.use_of_funds__info_text',
				benefits_list: '.use_of_funds__benefits_list',
				comparison: '.use_of_funds__comparison',
				orgchart: '.use_of_funds__orgchart_text',
				orgchart_image: '.use_of_funds__orgchart_image',
				donate_button: '.use_of_funds__button'
			}
		},
		donation_form: {
			interval: {
				once: '.select-interval-0 label',
				monthly: '.select-interval-1 label',
				yearly: '.select-interval-12 label',
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
		},
		soft_close: {
			maybe_later_button: '.wmde-banner-soft-close-buttons .wmde-banner-soft-close-button:first-child',
			close_button: '.wmde-banner-soft-close-buttons .wmde-banner-soft-close-button:last-child',
		}
	}
};

export const intervals = {
	once: 'once',
	monthly: 'monthly',
	yearly: 'yearly',
};

export const amounts = {
	five: 'five',
	fifteen: 'fifteen',
	twenty_five: 'twenty_five',
	fifty: 'fifty',
	one_hundred: 'one_hundred',
};

export const paymentTypes = {
	paypal: 'paypal',
	credit_card: 'credit_card',
	direct_debit: 'direct_debit',
	bank_transfer: 'bank_transfer',
	sofort: 'sofort',
};
