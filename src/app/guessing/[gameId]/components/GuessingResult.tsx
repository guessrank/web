import Button from '@/components/Button'
import type { GuessingResultProps } from '@/types/props/GuessingResultProps'

export default function GuessingResult(props: GuessingResultProps) {
	return (
		<div
			ref={props.innerRef}
			className='fixed flex-col top-0 left-0 w-full h-full bg-black bg-opacity-90 hidden justify-center items-center z-50 text-white'>
			<h2 className='text-2xl font-bold text-white'>Result</h2>
			<p
				className='text-lg text-white font-bold
        '>
				{props.result.status ? (
					<span className='text-green-500'>Correct</span>
				) : (
					<span className='text-red-500'>Incorrect</span>
				)}
			</p>
			<p className='text-lg text-white'>The actual rank is</p>
			<p className='text-lg text-white'>{props.result.clipRef.rankLevel}</p>
			<p className='text-lg text-white'>The actual division is</p>
			<p className='text-lg text-white'>{props.result.clipRef.divisionLevel}</p>
			<Button onClick={props.closeResultModal(props.innerRef)}>Close</Button>
		</div>
	)
}
