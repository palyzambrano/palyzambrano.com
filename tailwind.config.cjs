const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				violet: '#98A2EB',
				'tx-blue': '#394287',
				'bg-white': '#FAFAFA',
				rosita: '#FFE3EE',
				rojito: '#F54F41'
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: [forms, typography]
};
