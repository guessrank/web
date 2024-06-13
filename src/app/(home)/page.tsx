import Cards from './components/Cards'

export default function Home() {
	return (
		<main className='flex flex-col items-center gap-4 p-24'>
			<h1 className='text-5xl'>GuessRank.xyz</h1>
			<h3 className='text-2xl'>Select a game to start guessing</h3>
			<Cards />
		</main>
	)
}
