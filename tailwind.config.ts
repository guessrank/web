import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			maxWidth: {
				layout: '1300px',
			},
			colors: {
				dark: '#0E1217',
				shark: '#1C1F26',
				'rock-blue': '#9EA9C3',
				manatee: '#828BA2',
				tuna: '#2D323A',
				'ghost-white': '#F5F8FC',
				white: '#FFFFFF',
				'white-smoke': '#F1F2F3',
				'white-gallery': '#E9EAEB',
				raven: '#767B87',
				sunglow: '#FFB114',
				amber: '#FFC412',
			},
		},
	},
	plugins: [],
}
export default config
