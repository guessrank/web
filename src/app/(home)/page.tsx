import Cards from './components/Cards'

export default function Home() {
	return (
		<main className='flex flex-col items-center gap-4 p-6 w-full'>
			<section className='max-w-layout w-full flex justify-center flex-col items-center gap-24'>
				<header className='flex flex-col gap-6 justify-center items-center'>
					<h1 className='text-4xl md:text-5xl'>GuessRank.xyz</h1>
					<h2 className='text-xl md:text-2xl text-center'>
						Select a game to start guessing
					</h2>
				</header>
				<Cards />
			</section>
		</main>
	)
}
