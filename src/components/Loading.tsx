export default function Loading(): JSX.Element {
	return (
		<div className='flex gap-2'>
			<div className='w-5 h-5 rounded-full animate-pulse bg-indigo-600'></div>
			<div className='w-5 h-5 rounded-full animate-pulse bg-indigo-600'></div>
			<div className='w-5 h-5 rounded-full animate-pulse bg-indigo-600'></div>
		</div>
	)
}
