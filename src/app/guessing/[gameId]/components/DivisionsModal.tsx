import Division from './Division'
import type { DivisionsModalProps } from '@/types/props/DivisionModalProps'

export default function DivisionsModal(props: DivisionsModalProps) {
	return (
		<div
			onClick={props.handleBackgroundClick}
			className='fixed inset-0 flex items-center justify-center z-50'>
			<div className='relative flex flex-col justify-center items-center gap-4 bg-shark rounded-lg border border-gray-700 w-full sm:w-80 h-56 p-4'>
				<h2 className='text-2xl text-white'>Please select a division</h2>
				<ul className='flex flex-wrap gap-2'>
					{props.divisions.map((division) => (
						<li
							id={division.level.toString()}
							key={division.level}
							onClick={props.handleDivisionInnerClick}
							className='flex flex-col justify-center items-center hover:scale-105 transition-transform'>
							<Division {...division} />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
