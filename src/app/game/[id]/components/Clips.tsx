'use client'

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
	if (isLoading) return <div>Loading...</div>
	return (
		<div>
			<iframe
				src='https://www.youtube.com/embed/5JLfjnEkeI4?si=XrT-YLTscndMhe_0'
				className='w-[800px] h-[400px]'
				allowFullScreen
				loading='lazy'
				title={'video'}
			/>
		</div>
	)
}
