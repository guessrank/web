import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { removeClip, setCurrentClip, removeAllClips } from './actions'
import type { ClipsBaseState } from '@/types/states/ClipsBaseState'

const useClipsStore = create<ClipsBaseState>()(
	persist(
		(set) => ({
			clips: [],
			currentIndex: 0,
			current: null,
			remove: removeClip(set),
			setCurrent: setCurrentClip(set),
			removeAll: removeAllClips(set),
		}),
		{
			name: 'clips',
		},
	),
)

export default useClipsStore
