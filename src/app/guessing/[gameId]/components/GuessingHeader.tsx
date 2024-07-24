'use client'
import Button from '@/components/Button'
import Loading from '@/components/Loading'
import YoutubeFrame from './YoutubeFrame'
import useGuessing from '../hooks/useGuessing'
import type { GuessingHeaderProps } from '@/types/props/GuessingHeaderProps'

export default function GuessingHeader(
	props: GuessingHeaderProps,
): JSX.Element {
	const { clips, buttonEnabled, nextClip, onLoadYoutubeFrame } = useGuessing(
		props.clips,
	)
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