/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'dark-blue': '#091928',
				'light-blue': '#4480C2',
				gray_1000: '#424242',
				gray_400: '#D7D7D7',
			},
		},
	},
	plugins: [],
};
