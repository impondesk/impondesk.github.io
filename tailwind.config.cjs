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
