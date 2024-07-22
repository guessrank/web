import { requestHandler } from '@/utils/requestHandler'

const clipService = {
	get: async (gameId: string, page: Number) =>
		await requestHandler({
			url: `/api/v1/clips?gameId=${gameId}&page=${page}&approved=false`,
		}),
}

export default clipService
