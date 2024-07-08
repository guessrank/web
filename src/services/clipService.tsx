import { api } from '@/helpers'

export const clipService = {
	getClips: async (id: string) =>
		await api
			.get(`/api/v1/clips?gameId=${id}&approved=false`)
			.then((res) => res.data),
}
