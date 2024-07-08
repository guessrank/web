import { gameApi } from '@/services/gameService'

const useGame = () => {
	const getGameById = async (id: string) => {
		const res = await gameApi.get(id)
		const game = res?.body
		return game
	}

	return { getGameById }
}

export default useGame
