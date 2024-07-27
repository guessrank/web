import type { Metadata } from 'next'
import '../styles/globals.css'
import { staticMetadata } from '@/utils/siteStaticMetadata'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Header from '@/components/Header'
import Head from 'next/head'

export const metadata: Metadata = staticMetadata

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<Head>
				<meta
					property='og:image'
					content='https://guessrank.xyz/images/logo.svg'
				/>
				<meta
					property='og:site_name'
					content='GuessRank.xyz'
				/>
				<meta
					property='og:title'
					content='GuessRank'
				/>
				<meta
					property='og:type'
					content='website'
				/>
				<meta
					property='og:url'
					content='https://guessrank.xyz/'
				/>
				<meta
					property='og:description'
					content='Guess the Rank of Players in Games like Valorant, Rocket League, and more!'
				/>
			</Head>
			<body className='bg-dark text-white'>
				<SpeedInsights />
				<Header />
				<main className='flex flex-col items-center gap-4 p-6 w-full'>
					{children}
				</main>
			</body>
		</html>
	)
}
