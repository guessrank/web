'use client'
import { useRef } from 'react'
import Button from '@/components/Button'
import Loading from '@/components/Loading'
import GuessingResult from './GuessingResult'
import YoutubeFrame from './YoutubeFrame'
import useGuessing from '../hooks/useGuessing'
import type { GuessingHeaderProps } from '@/types/props/GuessingHeaderProps'

export default function GuessingHeader(props: GuessingHeaderProps) {
	const resultRefDiv = useRef<HTMLDivElement>(null)
	const {
		clips,
		result,
		buttonEnabled,
		nextClip,
		onLoadYoutubeFrame,
		closeResult,
	} = useGuessing(props.clips)
	if (clips.length === 0) return <Loading />
	return (
		<div className='flex flex-col items-center w-full h-full gap-4 '>
			<GuessingResult
				innerRef={resultRefDiv}
				result={result}
				closeResultModal={closeResult}
			/>
			<YoutubeFrame
				url={clips[0]?.url}
				title={clips[0]?.uniqueId}
				onLoad={onLoadYoutubeFrame}
			/>
			<Button
				onClick={nextClip(resultRefDiv)}
				disabled={!buttonEnabled}>
				Submit
			</Button>
		</div>
	)
}
