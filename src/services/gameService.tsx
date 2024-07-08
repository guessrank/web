import { api } from '@/helpers'

export const gameService = {
	get: async (id: string) =>
		await api.get(`/api/v1/games?uniqueId=${id}`).then((res) => res.data),
	getAll: async () => await api.get(`/api/v1/games`).then((res) => res.data),
}
