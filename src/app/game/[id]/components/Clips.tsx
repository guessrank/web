'use client'
import useClipsStore from '@/store/clips.store'
import type { Clip } from '@/types/interfaces'
import useClip from '../hooks/useClip'


export default function Clips({ clips }: { clips: Clip[] }) {
	const setClips = useClipsStore((state) => state.setClips)
	setClips(clips)

	let currentClip = clips[0]

	return (
		<div className='flex justify-center items-center flex-col gap-5'>
			<h2 className='text-2xl font-bold text-center'>
				Showing {currentClip?.uniqueId}
			</h2>
			<iframe
				src=''
				className='w-[800px] h-[400px]'
				allowFullScreen
				loading='lazy'
				title=''
				id=''
			/>
		</div>
	)
}
