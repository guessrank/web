import { gameApi } from '@/services/gameService'

const useGames = () => {
	const getGames = async () => {
		const res = await gameApi.getAll()
		const games = res?.body
		return games
	}

	return { getGames }
}

export default useGames
