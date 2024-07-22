import type { Metadata } from 'next'

export const staticMetadata: Metadata = {
	title: 'GuessRank',
	description:
		'Guess the Rank of Players in Games like Valorant, Rocket League, and more!',
	icons: [
		{
			url: '/images/logo.svg',
			origin: 'local',
			search: 'favicon',
			type: 'image/svg+xml',
		},
	],
}
