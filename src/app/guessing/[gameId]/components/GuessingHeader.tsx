'use client'
import { ClipType } from '@/types/ClipType'
import YoutubeFrame from './YoutubeFrame'
import Button from '@/components/Button'
import Loading from '@/components/Loading'
import useClipsStore from '@/store/clips'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import type { GuessingHeaderProps } from '@/types/props/GuessingHeaderProps'

export default function GuessingHeader(
	props: GuessingHeaderProps,
): JSX.Element {
	const searchParams = useSearchParams()
	const { replace } = useRouter()
	const pathname = usePathname()

	const clips = useClipsStore((state) => state.clips)
	const setClips = useClipsStore((state) => state.setClips)
	const remove = useClipsStore((state) => state.remove)
	const [currentPage, setCurrentPage] = useState(1)
	const [buttonEnabled, setButtonEnabled] = useState(false)

	useEffect(() => {
		setClips(props.clips)
	}, [])

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

	const nextClip = () => {
		remove()
	}

	const onLoadYoutubeFrame = () => setButtonEnabled(true)

	if (clips.length === 0) return <Loading />
	return (
		<div className='flex flex-col items-center w-full'>
			<h1 className='text-3xl font-bold'>{clips[0]?.uniqueId}</h1>
			<YoutubeFrame
				url={clips[0]?.url}
				title={clips[0]?.uniqueId}
				onLoad={onLoadYoutubeFrame}
			/>
			<Button
				onClick={nextClip}
				disabled={!buttonEnabled}>
				Next
			</Button>
		</div>
	)
}
