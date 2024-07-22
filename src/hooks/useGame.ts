import gameService from '@/services/game.service'
import type { GameType } from '@/types/GameType'

const useGame = () => {
	const getAllGames = async () => {
		const response = await gameService.get('ALL')
		return { data: response.data?.body as GameType[], error: response.error }
	}
	const getGameById = async (id: string) => {
		const response = await gameService.get(id)
		return { data: response.data?.body[0] as GameType, error: response.error }
	}
	return { getAllGames, getGameById }
}

export default useGame
