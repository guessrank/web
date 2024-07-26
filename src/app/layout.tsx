import type { Metadata } from 'next'
import '../styles/globals.css'
import { staticMetadata } from '@/utils/siteStaticMetadata'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Header from '@/components/Header'

export const metadata: Metadata = staticMetadata

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
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
