import type { Metadata } from 'next'
import '@/styles/globals.css'

import Footer from '@/components/footer'

export const metadata: Metadata = {
	title: 'GuessRank',
	description:
		'Guess the Rank of Players in Games like Valorant, Rocket League, and more!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				{children}
				<Footer />
			</body>
		</html>
	)
}
