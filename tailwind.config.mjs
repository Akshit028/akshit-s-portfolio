import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				bgColor: "#121114",
				primary: "#FFFFFF",
				title: "#FFFFFF",
				body: "#A1A1AA",
				hoverColor: "#0E0E10",
			},
		},
	},
	plugins: ["prettier-plugin-tailwindcss", require("@tailwindcss/typography")],
};
