import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { removeClip, setCurrentClip, setClips, removeAllClips } from './actions'
import type { ClipsBaseState } from '@/types/states/ClipsBaseState'

const useClipsStore = create<ClipsBaseState>()(
	persist(
		(set, get) => ({
			clips: [],
			currentIndex: 0,
			current: null,
			remove: removeClip(set, get),
			setClips: setClips(set),
			setCurrent: setCurrentClip(set),
			removeAll: removeAllClips(set),
			get: () => get().clips,
		}),
		{
			name: 'clips',
		},
	),
)

export default useClipsStore
