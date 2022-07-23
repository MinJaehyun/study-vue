module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/prettier',
		'@vue/typescript/recommended',
		// "eslint:recommended",
		// 'plugin:prettier/recommended',
	],
	rules: {
		// "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		// "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		'no-console': 'off',
		'vue/multi-word-component-names': [
			'error',
			{
				ignores: ['default', 'Todo'],
			},
		],
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				endOfLine: auto,
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				bracketSpacing: true,
				arrowParens: 'avoid',
			},
		],
	},
	parserOptions: {
		ecmaVersion: 2020,
	},
	ignorePatterns: settings.json,
};
