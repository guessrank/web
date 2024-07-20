import { requestHandler } from '@/utils/requestHandler'

const gameService = {
	get: async (id: string) =>
		await requestHandler({
			url: `/api/v1/games?uniqueId=${id === 'ALL' ? '' : id}`,
		}),
}

export default gameService
