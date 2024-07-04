'use client'

import Spinner from '@/components/Spinner'
import useGame from '../hooks/useClip'

export default function Clips({
	params,
}: {
	params: {
		id: string
	}
}) {
	const { useClipQuery } = useGame()
	const { data, isLoading } = useClipQuery(params.id)

	if (isLoading) <Spinner />
	if (!data.body.length) return <h2>No clips found</h2>

	const randomClip = data.body[Math.floor(Math.random() * data.body.length)]
	return (
		<div className='flex justify-center items-center flex-col gap-5'>
			<h2 className='text-2xl font-bold text-center'>
				Found {data.options.total} clips
			</h2>

			<iframe
				src={randomClip.url}
				className='w-[800px] h-[400px]'
				allowFullScreen
				loading='lazy'
				title={randomClip.gameId}
				id={randomClip.uniqueId}
			/>
		</div>
	)
}
