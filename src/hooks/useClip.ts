import clipService from '@/services/clip.service'
import type { ClipType } from '@/types/ClipType'

const useClip = () => {
	const getClips = async (gameId: string, page: Number) => {
		const response = await clipService.get(gameId, page)
		return {
			data: response.data?.body as ClipType[],
			options: response.data?.body,
			error: response.error,
		}
	}
	return { getClips }
}

export default useClip
