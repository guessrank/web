import { gameApi } from '@/services/gameService'
import { QueryClient, useQuery } from '@tanstack/react-query'

const useClip = () => {
	const queryClient = new QueryClient()

	const useClipQuery = (id: string) =>
		useQuery({
			queryKey: ['game', id],
			queryFn: () => gameApi.get(id),
			refetchOnMount: false,
		})

	const prefetchClipsQuery = async (id: string) => {
		await queryClient.prefetchQuery({
			queryKey: ['game', id],
			queryFn: () => gameApi.get(id),
		})
	}

	return { queryClient, useClipQuery, prefetchClipsQuery }
}

export default useClip
