import { gameService } from '@/services/gameService'

const useGame = () => {
	const getGameById = async (id: string) => {
		const response = await gameService.get(id)
		return {
			data: response?.data?.body[0],
			error: response.error,
		}
	}
	const getAllGames = async () => await gameService.getAll()
	return { getGameById, getAllGames }
}

export default useGame
