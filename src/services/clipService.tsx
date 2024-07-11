import { requestHandler } from '@/utils/requestHandler'

export const clipService = {
	getClips: async (id: string) =>
		await requestHandler({ url: `/api/v1/clips?gameId=${id}&approved=false` }),
}
