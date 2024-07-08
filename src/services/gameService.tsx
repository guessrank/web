import { api } from '@/helpers'

export const gameApi = {
	getClips: async (id: string) =>
		await api
			.get(`/api/v1/clips?gameId=${id}&approved=false`)
			.then((res) => res.data),
	get: async (id: string) =>
		await api.get(`/api/v1/games?uniqueId=${id}`).then((res) => res.data),
	getAll: async () => await api.get(`/api/v1/games`).then((res) => res.data),
}
