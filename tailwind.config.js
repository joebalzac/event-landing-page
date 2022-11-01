const rem = (px) => `${px / 16}rem`;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		fontFamily: {
			body: ['Montserrat', 'serif'],
		},
		colors: {
			'primary-green': '#264439',
			'vanilla-light': '#f1e3cf',
			'vanilla-dark': '#efe2cc',
		},
		containers: {
			sm: rem(640),
			md: rem(768),
			lg: rem(1024),
			xl: rem(1280),
			DEFAULT: rem(1420),
			padding: '1.5rem',
		},
		extend: {
			spacing: {
				xs: '0.25rem',
				s: '0.5rem',
				m: '1rem',
				l: '2rem',
				xl: '4rem',
			},
			// Controls rich-text styling (tailwind typography plugin)
			typography: (theme) => ({
				DEFAULT: {
					css: {
						maxWidth: '100%',
						lineHeight: 1.5,
						a: {
							color: theme('colors.primary'),
						},
					},
				},
				sm: {
					css: {
						fontSize: rem(14),
						lineHeight: 1.5,
					},
				},
				lg: {
					css: {
						fontSize: rem(18),
						lineHeight: 1.5,
					},
				},
				xl: {
					css: {
						fontSize: rem(20),
						lineHeight: 1.5,
					},
				},
				'2xl': {
					css: {
						fontSize: rem(22),
						lineHeight: 1.5,
					},
				},
			}),
		},
	},
	corePlugins: {
		container: false,
	},
	plugins: [
		require('@tailwindcss/typography')({
			className: 'rich-text',
		}),
		require('@tailwindcss/forms'),
	],
};
