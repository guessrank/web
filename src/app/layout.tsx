import type { Metadata } from 'next'
import '@/styles/globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ViewTransitions } from 'next-view-transitions'
import QueryProvider from '@/providers/QueryProvider'

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
					<QueryProvider>
						<Header />
						{children}
						<Footer />
					</QueryProvider>
				</body>
			</html>
		</ViewTransitions>
	)
}
