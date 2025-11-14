/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				stack: ['"Stack Sans Headline"', "sans-serif"],
			},
		},
	},
	plugins: [],
};
