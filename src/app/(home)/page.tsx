import Maintenance from '@/components/Maintenance'
import Section from '@/components/Section'
import useGame from '@/hooks/useGame'
import GameCard from './components/GameCard'
import type { GameType } from '@/types/GameType'

export default async function Home(): Promise<JSX.Element> {
	const { getAllGames } = useGame()
	const { data, error } = await getAllGames()
	if (error) return <Maintenance />
	return (
		<Section>
			<div className='flex flex-col items-center gap-4'>
				<h1 className='text-4xl font-bold'>Available games</h1>
				<p className='text-lg text-gray-500'>Please choose a game to play</p>
			</div>
			<ul className='flex justify-center flex-wrap gap-4'>
				{data?.map((game: GameType, index: number) => (
					<GameCard
						key={index}
						uniqueId={game.uniqueId}
						title={game.name}
						source={game.imageSrc}
					/>
				))}
			</ul>
		</Section>
	)
}
