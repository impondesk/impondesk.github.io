/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		'@tailwindcss/typography',
		'@tailwindcss/forms',
		'@tailwindcss/aspect-ratio',
		'@tailwindlabs/lorem'
	],
}
