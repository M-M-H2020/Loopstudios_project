/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['index.html'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			fontFamily: {
				sans: ['Josefin Sans', 'sans-serif'],
				alata: ['Alata'],
			},
			letterSpacing: {
				widest: '0.3em',
			},
			backgroundImage: {
				'hero-desktop': "url('./assets/desktop/image-hero.jpg')",
				'hero-mobile': "url('./assets/mobile/image-hero.jpg')",
			},
		},
	},
	plugins: [],
}
