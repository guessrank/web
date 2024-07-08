import { gameApi } from '@/services/gameService'

const useClip = () => {
	const getClipsById = async (id: string) => {
		const res = await gameApi.getClips(id)
		return res
	}

	return { getClipsById }
}

export default useClip
