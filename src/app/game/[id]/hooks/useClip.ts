import { clipService } from '@/services/clipService'
import { Clip } from '@/types/interfaces'

const useClip = () => {
	const getClipsById = async (id: string) => {
		const res = await clipService.getClips(id)
		return res.body?.length === 0 ? [] : res.body
	}

	const shuffleClips = (clips: Clip[]) => {
		const shuffledClips = clips.sort(() => Math.random() - 0.5)
		return shuffledClips
	}

	return { getClipsById, shuffleClips }
}

export default useClip
