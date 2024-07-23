import { ClipType } from '@/types/ClipType'

export interface ClipsBaseState {
	clips: ClipType[]
	currentIndex: number
	current: ClipType | null
	remove: () => void
	setCurrent: (index: number) => void
	removeAll: () => void
	setClips: (clips: ClipType[]) => void
	get: () => ClipType[]
}
