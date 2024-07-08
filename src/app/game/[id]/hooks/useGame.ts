import { gameService } from '@/services/gameService'

const useGame = () => {
	const getGameById = async (id: string) => {
		const res = await gameService.get(id)
		const game = res?.body
		return game[0]
	}

	const getAllGames = async () => {
		const res = await gameService.getAll()
		const games = res?.body
		return games
	}

	return { getGameById, getAllGames }
}

export default useGame
