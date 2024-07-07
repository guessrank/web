import useGames from '../game/[id]/hooks/useGames'
import Cards from './components/Cards'

export default async function Home() {
	const { getGames } = useGames()
	const games = await getGames()

	return (
		<main className='flex flex-col items-center gap-4 p-6 w-full h-full min-h-[calc(100vh-56px)]'>
			<section className='max-w-layout w-full flex justify-center flex-col items-center gap-24'>
				<h2 className='text-xl md:text-2xl text-center text-gray-100'>
					Select a game to start guessing
				</h2>
				<Cards games={games} />
			</section>
		</main>
	)
}
