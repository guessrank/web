import { clipService } from '@/services/clipService'

const useClip = () => {
	const getClipsById = async (id: string) => {
		const res = await clipService.getClips(id)
		return res
	}

	return { getClipsById }
}

export default useClip
