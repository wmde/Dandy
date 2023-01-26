module.exports = {
	root: true,

	env: {
		node: true,
		es6: true,
		browser: true,
	},

	extends: [
		'wikimedia',
	],

	rules: {
		'no-console': 'error',
		'no-debugger': 'error',

		'camelcase': [ 'error', { properties: 'never', ignoreImports: true, ignoreDestructuring: true } ],
		'jsdoc/no-undefined-types': 'off',

		// diverging from Wikimedia rule set
		'max-len': [ 'error', 170 ],
		'comma-dangle': [ 'error', 'always-multiline' ],
		'operator-linebreak': 'off',
		'quote-props': 'off',
	},

	parserOptions: {
		'parser': '@babel/eslint-parser',
		'sourceType': 'module',
		'ecmaVersion': 'latest'
	},
};