const formConfig = {
	address_page: {
		selector: '.address-page'
	},
	payment_page: {
		selector: '.payment-page'
	},
	forms: {
		address_type: {
			selector: '#address-type-selection'
		},
		private: {
			selector: '#laika-donation-personal-data-person'
		},
		company: {
			selector: '#laika-donation-personal-data-company'
		},
		email: {
			selector: '#laika-donation-personal-data-email'
		},
		anonymous: {
			selector: '#laika-donation-personal-data-anonymous'
		},
	},
	fields: {
		amount: {
			name: 'amount-grp',
			error: {
				selector: '.amount-wrapper + .help',
				language_item: 'donation_form_payment_amount_error',
			},
			radios: {
				five: {
					selector: '#amount-500',
					label_selector: '#amount-500 + label',
				},
				fifteen: {
					selector: '#amount-1500',
					label_selector: '#amount-1500 + label',
				},
				twenty_five: {
					selector: '#amount-2500',
					label_selector: '#amount-2500 + label',
				},
				fifty: {
					selector: '#amount-5000',
					label_selector: '#amount-5000 + label',
				},
				seventy_five: {
					selector: '#amount-7500',
					label_selector: '#amount-7500 + label',
				},
				one_hundred: {
					selector: '#amount-10000',
					label_selector: '#amount-10000 + label',
				},
				two_hundred_and_fifty: {
					selector: '#amount-25000',
					label_selector: '#amount-25000 + label',
				},
				three_hundred: {
					selector: '#amount-30000',
					label_selector: '#amount-30000 + label',
				},
				custom: {
					selector: 'amount-custom',
					label_selector: '#amount-custom + label',
				},
			}
		},
		interval: {
			name: 'interval',
			radios: {
				once: {
					language_item: 'donation_form_payment_interval_0',
					selector: '#interval-0',
					label_selector: '#interval-0 .control-label',
				},
				monthly: {
					language_item: 'donation_form_payment_interval_1',
					selector: '#interval-1',
					label_selector: '#interval-1 .control-label',
				},
				quarterly: {
					language_item: 'donation_form_payment_interval_3',
					selector: '#interval-3',
					label_selector: '#interval-3 .control-label',
				},
				half_yearly: {
					language_item: 'donation_form_payment_interval_6',
					selector: '#interval-6',
					label_selector: '#interval-6 .control-label',
				},
				yearly: {
					language_item: 'donation_form_payment_interval_12',
					selector: '#interval-12',
					label_selector: '#interval-12 .control-label',
				},
			}
		},
		payment: {
			name: 'payment',
			error: {
				selector: '.payment-section fieldset:last-child .help',
				language_item: 'donation_form_payment_type_error',
			},
			radios: {
				direct_debit: {
					language_item: 'BEZ',
					selector: '#payment-bez',
					label_selector: '#payment-bez .control-label',
				},
				bank_transfer: {
					language_item: 'UEB',
					selector: '#payment-ueb',
					label_selector: '#payment-ueb .control-label',
				},
				credit_card: {
					language_item: 'MCP',
					selector: '#payment-mcp',
					label_selector: '#payment-mcp .control-label',
				},
				paypal: {
					language_item: 'PPL',
					selector: '#payment-ppl',
					label_selector: '#payment-ppl .control-label',
				},
				sofort: {
					language_item: 'SUB',
					selector: '#payment-sub',
					label_selector: '#payment-sub .control-label',
				},
			}
		},
		address_type: {
			name: 'addressType',
			radios: {
				full: {
					selector: '[name="addressType"][value="full"]'
				},
				email: {
					selector: '[name="addressType"][value="email"]'
				},
				anonymous: {
					selector: '[name="addressType"][value="anonymous"]'
				},
			}
		},
		address_type_internal: {
			name: 'addressTypeInternal',
			radios: {
				person: {
					selector: '[name="addressTypeInternal"][value="person"]'
				},
				company: {
					selector: '[name="addressTypeInternal"][value="company"]'
				},
			}
		},
		address_type_membership: {
			name: 'addressTypeInternal',
			radios: {
				person: {
					selector: '#personal'
				},
				company: {
					selector: '#company'
				}
			}
		},
		salutation: {
			name: 'salutationInternal',
			radios: {
				mr: {
					selector: '[name="salutationInternal"][value="Herr"], [name="salutationInternal"][value="Mr"]'
				},
				mrs: {
					selector: '[name="salutationInternal"][value="Frau"], [name="salutationInternal"][value="Ms"]'
				},
			}
		},
		membership_type: {
			name: 'type',
			radios: {
				active: {
					selector: '#sustaining input',
				},
				sustaining: {
					selector: '#active input',
				}
			}
		},
		title: {
			name: 'title',
			selector: '#title',
			options: {
				none: '',
				dr: 'Dr.',
				prof: 'Prof.',
				prof_dr: 'Prof. Dr.'
			}
		},
		company_name: {
			selector: '#company-name',
		},
		first_name: {
			selector: '#first-name'
		},
		last_name: {
			selector: 'input#last-name'
		},
		street: {
			selector: 'input#street'
		},
		post_code: {
			selector: 'input#post-code'
		},
		city: {
			selector: 'input#city'
		},
		country: {
			selector: 'input#country'
		},
		receipt: {
			selector: '#donation_receipt'
		},
		email: {
			selector: 'input#email'
		},
		newsletter: {
			selector: '[name="newsletter"]'
		},
		birth_date: {
			selector: 'input#birthDate'
		},
		incentive: {
			selector: '.incentive-tote_bag input'
		},
		iban: {
			selector: 'input#iban'
		}
	},
	buttons: {
		next: {
			language_item: '',
			selector: '#next'
		},
		submit: {
			selector: '#submit-btn'
		},
		address_change: {
			selector: '#address-change-button'
		}
	},
	success: {
		donation: {
			selector: '.donation-confirmation',
			payment_notice: {
				selector: '.payment-notice',
				language_items: {
					bank_transfer: 'donation_confirmation_payment_bank_transfer',
				},
			},
			bank_data: {
				selector: '#bank-data',
			}
		},
		membership: {
			selector: '.membership-confirmation'
		}
	}
}

export default formConfig;
