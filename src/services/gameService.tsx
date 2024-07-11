import { requestHandler } from '@/utils/requestHandler'

export const gameService = {
	get: async (id: string) =>
		await requestHandler({ url: `/api/v1/games?uniqueId=${id}` }),
	getAll: async () => await requestHandler({ url: '/api/v1/games' }),
}
