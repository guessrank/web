import Link from 'next/link'

export default function NotFound() {
	return (
		<main className='flex min-h-screen flex-col items-center gap-4 p-24'>
			<h1 className='text-4xl font-bold text-center text-red-800'>404</h1>
			<p className='text-lg text-center'>
				The page you&apos;re looking for doesn&apos;t exist.
			</p>
			<Link
				href='/'
				className='text-lg text-blue-500 underline cursor-pointer'>
				Go back home
			</Link>
		</main>
	)
}
