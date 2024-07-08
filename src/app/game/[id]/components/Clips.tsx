import useClip from '../hooks/useClip'

export default async function Clips({
	params,
}: {
	params: {
		id: string
	}
}) {
	const { getClipsById } = useClip()
	const res = await getClipsById(params?.id)
	const randomClip = res?.body[Math.floor(Math.random() * res?.body?.length)]

	if (res?.body?.length < 1) return <h2>No clips found</h2>

	return (
		<div className='flex justify-center items-center flex-col gap-5'>
			<h2 className='text-2xl font-bold text-center'>
				Found {res.options.total} clips
			</h2>
			<iframe
				src={randomClip?.url}
				className='w-[800px] h-[400px]'
				allowFullScreen
				loading='lazy'
				title={randomClip?.gameId}
				id={randomClip?.uniqueId}
			/>
		</div>
	)
}
