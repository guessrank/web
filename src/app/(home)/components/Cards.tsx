import Card from './Card'
import { GameProps } from '@/types/interfaces'

export default function Cards({ games }: { games: GameProps[] }) {
	return (
		<div className='flex flex-wrap gap-4 w-full justify-center sm:justify-start'>
			{games?.map((game) => (
				<Card
					key={game?.uniqueId}
					src={game?.imageSrc}
					alt={game?.name}
					gameId={game?.uniqueId}
				/>
			))}
		</div>
	)
}
