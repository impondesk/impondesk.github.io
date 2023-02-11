/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	corePlugins: {
		preflight: false,
	  },
	theme: {
		extend: {
			fontFamily: {
			   'poppins': ['Poppins'],
			   sans: ['Poppins']
			},
			colors: {
				black:"#1b1d20",
				"accent": {
				  "50": "#E5E5FF",
				  "100": "#CCCCFF",
				  "200": "#9999FF",
				  "300": "#6666FF",
				  "400": "#3333FF",
				  "500": "#0000FF",
				  "600": "#0000CC",
				  "700": "#000099",
				  "800": "#000066",
				  "900": "#000033"
				},
			  }
		 }
	},
	plugins: [
		'@tailwindcss/typography',
		'@tailwindcss/forms',
		'@tailwindcss/aspect-ratio',
		'@tailwindlabs/lorem'
	],
}
