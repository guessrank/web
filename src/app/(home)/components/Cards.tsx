import readJSONFile from '@/utils/readJSONFile'
import Card from './Card'
import { GameProps } from '@/types/interfaces'

export default async function Cards() {
	const games = (await readJSONFile({
		url: '/public/assets/data/games.json',
	})) as GameProps[]

	return (
		<div className='flex flex-wrap gap-4 w-full justify-center sm:justify-start'>
			{games?.map((game) => (
				<Card
					key={game?.id}
					src={game?.src}
					alt={game?.name}
					gameId={game?.id}
				/>
			))}
		</div>
	)
}
