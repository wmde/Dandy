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
			dev: 'http://localhost:8084/wiki/Wikipedia:Hauptseite',
		},
		mobile: {
			production: 'https://de.wikipedia.org/wiki/Wikipedia:Hauptseite',
			dev: 'http://localhost:8084/mobile/wiki/Wikipedia:Hauptseite',
		},
		desktop_en: {
			production: 'https://en.wikipedia.org/wiki/Main_Page',
			dev: 'http://localhost:8084/wiki/Main_Page',
		},
		mobile_en: {
			production: 'https://en.wikipedia.org/wiki/Main_Page',
			dev: 'http://localhost:8084/en-mobile/wiki/Main_Page',
		},
		wpde: {
			production: 'https://www.wikipedia.de',
			dev: 'http://localhost:8084/wikipedia.de',
		},
	},
	selectors: {
		banner_visible: '.t-banner-visible',
		banner_visible_wpde: '.banner-position.wmde-banner--visible',
		banner_language: '.navbar-language',
		banner_language_active: '.active.navbar-item',
		banner_error_msg: '.wmde-banner-error-icon',
//		banner_hidden: '.wmde-banner--hidden',
		banner_hidden: '.wmde-banner--not-shown',
//		banner_soft_close: '.wmde-banner--soft-closing',
		banner_soft_close: '.wmde-banner-wrapper--soft-closing',
//		followup_visible: '.wmde-banner-followup-banner-position--state-finished',
		followup_visible: '.wmde-banner-wrapper.wmde-banner-wrapper--full-page',
		use_of_funds_link: '.t-use-of-funds-link',
		animated_text_highlight: {
//			main_slider: '.wmde-banner-slider-text-animated-highlight',
			main_slider: '.wmde-banner-slider .wmde-banner-text-animated-highlight',
//			full: '.wmde-banner-text-animated-highlight',
			full: '.wmde-banner-message .wmde-banner-text-animated-highlight',
		},
		message: {
			small_viewport: '.wmde-banner-slider-container',
			big_viewport: '.wmde-banner-message',
		},
		slider: {
			first_slide: '.keen-slider__slide.wmde-banner-slide',
			next_slide: '.keen-slider__slide.wmde-banner-slide',
			next_button: '.wmde-banner-slider-navigation-next',
			back_button: '.wmde-banner-slider-navigation-previous',
		},
		close_button: {
			main: '.t-close-main-banner',
			full: '.t-close-full-banner',
		},
		submit_button: {
			main: '.wmde-banner-mini-button',
			// form: '.wmde-banner-form-button',
			form: '.t-submit-main-donation',
			form_step_1: '.wmde-banner-form-step-1 .wmde-banner-form-button',
			form_step_2: '.wmde-banner-form-step-2 .wmde-banner-form-button',
//			annual_upgrade_choice: '.form-step-2-button .wmde-banner-form-button',
			annual_upgrade_choice: '.upgrade-to-yearly-button .wmde-banner-form-button', // redundant because of line 74
			custom_amount: '.t-submit-custom-amount',
			address_type: '.t-submit-address-type',
			main_donation: '.t-submit-main-donation',
			upgrade_to_yearly: '.t-submit-upgrade-to-yearly'
		},
		use_of_funds: {
			modal_is_open: '.banner_modal.is-visible',
//			modal_container: '.banner_modal__container',
			modal_container: '.banner-modal-container',
//			call_to_action: '.use_of_funds__button',
			call_to_action: '.use-of-funds-button',
			elements: {
				top_section: '.use_of_funds__section',
				text: '.use_of_funds__info_text',
				benefits_list: '.use_of_funds__benefits_list',
				comparison: '.use_of_funds__comparison',
				orgchart: '.use_of_funds__orgchart_text',
				orgchart_image: '.use_of_funds__orgchart_image',
				donate_button: '.use_of_funds__button',
			},
		},
		donation_form: {
			interval: {
//				single_payment: '.select-interval-0 label',
				single_payment: '.interval-0 label',
//				monthly: '.select-interval-1 label',
				monthly: '.interval-1 label',
//				annually: '.select-interval-12 label',
				annually: '.interval-12 label',
				disabled: {
					single_payment: '.select-interval-0.wmde-banner-disabled input[disabled]',
					monthly: '.select-interval-1.wmde-banner-disabled input[disabled]',
					annually: '.select-interval-12.wmde-banner-disabled input[disabled]',
					error: '.wmde-banner-error-icon',
				},
				error_msg_container: '.select-interval.wmde-banner-select-group-container.wmde-banner-select-group-container--with-error',
			},
			amount: {
//				five: '.select-amount-5 label',
				five: '.amount-5 label',
//				fifteen: '.select-amount-15 label',
				fifteen: '.amount-15 label',
//				twenty_five: '.select-amount-25 label',
				twenty_five: '.amount-25 label',
//				fifty: '.select-amount-50 label',
				fifty: '.amount-50 label',
//				one_hundred: '.select-amount-100 label',
				one_hundred: '.amount-100 label',
				custom_amount: '.t-custom-amount',
				error_msg_container: '.select-amount.wmde-banner-select-group-container.wmde-banner-select-group-container--with-error',
			},
			payment_type: {
//				paypal: '.select-payment-method-PPL label',
				paypal: '.payment-ppl label',
//				credit_card: '.select-payment-method-MCP label',
				credit_card: '.payment-mcp label',
//				direct_debit: '.select-payment-method-BEZ label',
				direct_debit: '.payment-bez label',
//				bank_transfer: '.select-payment-method-UEB label',
				bank_transfer: '.payment-ueb label',
//				sofort: '.select-payment-method-SUB label',
				sofort: '.payment-sub label',
				disabled: {
//					sofort: '.select-payment-method-SUB.wmde-banner-disabled',
					sofort: '.payment-sub.wmde-banner-disabled',
				},
				error_msg_container: '.select-payment-method.wmde-banner-select-group-container.wmde-banner-select-group-container--with-error',
			},
			upgrade_option_annually: {
				no: '.t-annual-upgrade-no',
				yes: '.t-annual-upgrade-yes',
				yes_custom_amount: '.t-annual-upgrade-yes-custom',
				enter_custom_amount: '.t-custom-amount-annual-upgrade',
				error_msg_container: '.wmde-banner-select-group-error-message',
			},
			contactDetails: {
				full: '.t-submit-address-type-person',
				anonymous: '.t-submit-address-type-anonym',
			},
			AddressTypes: {
				full: '.address-type-person',
				emailOnly: '.address-type-email',
				anonymous: '.address-type-none'
			}
		},
		soft_close: {
//			maybe_later_button: '.wmde-banner-soft-close-buttons .wmde-banner-soft-close-button:first-child',
			maybe_later_button: '.wmde-banner-soft-close-button-maybe-later',
//			close_button: '.wmde-banner-soft-close-buttons .wmde-banner-soft-close-button:last-child',
			close_button: '.wmde-banner-soft-close-button-close',
		},
	},
};

export const intervals = {
	single_payment: 'single_payment',
	monthly: 'monthly',
	annually: 'annually',
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

export const upgradeOptions = {
	yes: 'yes',
	no: 'no',
	custom_amount: 'yes_custom_amount',
};

export const contactDetails = {
	full: 'full',
	anonymous: 'anonymous',
};

export const addressTypes = {
	full: 'full',
	emailOnly: 'emailOnly',
	anonymous: 'anonymous'
};