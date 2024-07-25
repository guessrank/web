import { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import useClipsStore from '@/store/clips'
import useSelectionStore from '@/store/selection'
import type { ClipType } from '@/types/ClipType'
import type { ResultState } from '@/types/states/ResultState'

const useGuessing = (listClips: ClipType[]) => {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()

	const [result, setResult] = useState<ResultState>({
		message: 'Unknown',
		status: false,
		clipRef: {} as ClipType,
	})

	const clips = useClipsStore((state) => state.clips)
	const setClips = useClipsStore((state) => state.setClips)
	const remove = useClipsStore((state) => state.remove)
	const [currentPage, setCurrentPage] = useState(1)
	const [buttonEnabled, setButtonEnabled] = useState(false)
	const { rankLevel, divisionLevel } = useSelectionStore()

	useEffect(() => setClips(listClips), [])
	useEffect(() => {
		if (clips.length === 0) {
			setCurrentPage(currentPage + 1)
			checkPageStatus()
		}
	}, [clips])

	const onLoadYoutubeFrame = () => setButtonEnabled(true)
	const checkPageStatus = () => {
		const params = new URLSearchParams(searchParams)
		params.set('page', currentPage.toString())
		const newUrl = `${pathname}?${params.toString()}`
		replace(newUrl)
	}
	const closeResult = (resultFrame: React.RefObject<HTMLDivElement>) => () => {
		resultFrame.current?.classList.add('hidden')
		resultFrame.current?.classList.remove('flex')
	}
	const nextClip = (resultFrame: React.RefObject<HTMLDivElement>) => () => {
		resultFrame.current?.classList.remove('hidden')
		resultFrame.current?.classList.add('flex')
		if (
			rankLevel === clips[0].rankLevel &&
			divisionLevel === clips[0].divisionLevel
		)
			setResult({ message: 'Correct', status: true, clipRef: clips[0] })
		else setResult({ message: 'Incorrect', status: false, clipRef: clips[0] })
		if (rankLevel === 0) return
		setButtonEnabled(false)
		remove()
	}
	return {
		clips,
		result,
		buttonEnabled,
		onLoadYoutubeFrame,
		nextClip,
		closeResult,
	}
}

export default useGuessing
