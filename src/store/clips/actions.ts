export const removeClip = (set: any) => (index: number) => {
	set((state: any) => {
		const clips = [...state.clips]
		clips.splice(index, 1)
		return { clips }
	})
}

export const setCurrentClip = (set: any) => (index: number) => {
	set((state: any) => {
		const currentClip = state.clips[index]
		return { currentClip, currentClipIndex: index }
	})
}

export const removeAllClips = (set: any) => () => set({ clips: [] })
