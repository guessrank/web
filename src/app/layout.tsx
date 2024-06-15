import type { Metadata } from 'next'
import '@/styles/globals.css'
import Footer from '@/components/Footer'
import { ViewTransitions } from 'next-view-transitions'

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
		<ViewTransitions>
			<html lang='en'>
				<body className='bg-dark text-white'>
					{children}
					<Footer />
				</body>
			</html>
		</ViewTransitions>
	)
}
