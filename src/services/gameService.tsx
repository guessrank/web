import { api } from '@/helpers'

export const gameApi = {
	get: async (id: string) =>
		await api
			.get(`/api/v1/clips?gameId=${id}&approved=false`)
			.then((res) => res.data),
}
