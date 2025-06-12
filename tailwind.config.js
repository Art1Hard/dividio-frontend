/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
	safelist: [
		{
			pattern: /bg-(gray|green|blue|yellow|red|purple|orange|rose)-500/,
		},
	],
};
