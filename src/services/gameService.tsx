import { api } from '@/helpers'

export const gameApi = {
	get: async (id: string) =>
		await api.get(`/games/${id}`).then((res) => res.data),
}
