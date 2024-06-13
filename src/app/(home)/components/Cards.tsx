import readJSONFile from '@/utils/readJSONFile'
import Card from './Card'
import { GameProps } from '@/types/interfaces'

export default async function Cards() {
	const games = (await readJSONFile({
		url: '/public/assets/data/games.json',
	})) as GameProps[]

	return (
		<div className='flex gap-4'>
			{games?.map((game) => (
				<Card
					key={game?.id}
					width={164}
					height={164}
					src={game?.src}
					alt={game?.name}
					gameId={game?.id}
				/>
			))}
		</div>
	)
}
