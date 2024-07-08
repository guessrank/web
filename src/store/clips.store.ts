import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Clip } from '@/types/interfaces'

type ClipState = {
	clips: Clip[]
	setClips: (clips: Clip[]) => void
	removeClip: (clip: Clip) => void
}

const useClipsStore = create<ClipState>()(
	persist(
		(set) => ({
			clips: [],
			setClips: (clips: Clip[]) => set({ clips }),
			removeClip: (clip: Clip) =>
				set((state) => ({
					clips: state.clips.filter((c) => c.uniqueId !== clip.uniqueId),
				})),
		}),
		{
			name: 'clips',
		},
	),
)

export default useClipsStore
