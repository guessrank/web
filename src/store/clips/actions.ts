import type { ClipType } from '@/types/ClipType'

export const removeClip = (set: any, get: any) => () => {
	const newClips = get().clips.slice(1)
	set({ clips: newClips })
}

export const setCurrentClip = (set: any) => (index: number) => {
	set((state: any) => {
		const currentClip = state.clips[index]
		return { currentClip, currentClipIndex: index }
	})
}

export const setClips = (set: any) => (clips: ClipType[]) => set({ clips })

export const removeAllClips = (set: any) => () => set({ clips: [] })
