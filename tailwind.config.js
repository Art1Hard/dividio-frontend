/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/container-queries")],
	safelist: [
		{
			pattern: /bg-(gray|green|blue|yellow|red|purple|orange|rose)-500/,
		},
	],
};
