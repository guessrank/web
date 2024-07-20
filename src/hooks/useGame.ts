import gameService from '@/services/game.service'
import type { GameType } from '@/types/GameType'

const useGame = () => {
	const getAllGames = async () => {
		const response = await gameService.get('ALL')
		return { data: response.data?.body as GameType[], error: response.error }
	}
	return { getAllGames }
}

export default useGame
