import { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import useClipsStore from '@/store/clips'
import type { ClipType } from '@/types/ClipType'

const useGuessing = (listClips: ClipType[]) => {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()

	const clips = useClipsStore((state) => state.clips)
	const setClips = useClipsStore((state) => state.setClips)
	const remove = useClipsStore((state) => state.remove)
	const [currentPage, setCurrentPage] = useState(1)
	const [buttonEnabled, setButtonEnabled] = useState(false)

	useEffect(() => setClips(listClips), [])
	useEffect(() => {
		if (clips.length === 0) {
			setCurrentPage(currentPage + 1)
			checkPageStatus()
		}
	}, [clips])

	const checkPageStatus = () => {
		const params = new URLSearchParams(searchParams)
		params.set('page', currentPage.toString())
		const newUrl = `${pathname}?${params.toString()}`
		replace(newUrl)
	}

	const nextClip = () => remove()
	const onLoadYoutubeFrame = () => setButtonEnabled(true)

	return {
		clips,
		buttonEnabled,
		onLoadYoutubeFrame,
		nextClip,
	}
}

export default useGuessing
