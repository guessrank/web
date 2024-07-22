import { ClipType } from '@/types/ClipType'

export interface ClipsBaseState {
	clips: ClipType[]
	currentIndex: number
	current: ClipType | null
	remove: (index: number) => void
	setCurrent: (index: number) => void
	removeAll: () => void
}
