import { gameApi } from '@/services/gameService'
import { useQuery } from '@tanstack/react-query'

export function useGame(id: string) {
	return useQuery({
		queryKey: ['game', id],
		queryFn: () => gameApi.get(id),
		enabled: !!id,
	})
}
