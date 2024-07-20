import type { Metadata } from 'next'
import '../styles/globals.css'

import Header from '@/components/Header'

export const metadata: Metadata = {
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className='bg-dark text-white'>
				<Header />
				<main className='flex flex-col items-center gap-4 p-6 w-full h-full min-h-[calc(100vh-56px)]'>
					{children}
				</main>
			</body>
		</html>
	)
}
