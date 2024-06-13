import readJSONFile from './readJSONFile'
import { GameProps } from '@/types/interfaces'

export default async function getGameById({ id }: { id: string }) {
	const games = (await readJSONFile({
		url: '/public/assets/data/games.json',
	})) as GameProps[]
	return games.find((game) => game.id.toString() === id)
}
