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
			<ul className='flex justify-center flex-wrap gap-4 w-full'>
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
