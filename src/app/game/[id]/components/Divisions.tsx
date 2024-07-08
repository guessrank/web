import useRankStore from '@/store/rank.store'
import { DivisionProps } from '@/types/interfaces'
import Image from 'next/image'

export default function Divisions({
	divisions,
}: {
	divisions: DivisionProps[]
}) {
	const { setDivision } = useRankStore()
	return (
		<ul className='flex gap-5 flex-wrap min-w-72 justify-center'>
			{divisions?.map((division) => (
				<li
					onClick={() => setDivision(division.level)}
					key={division.level}
					className='flex flex-col items-center'>
					<p className='text-center text-nowrap'>{division.name}</p>
					<div className='relative size-20'>
						<Image
							src={division.imageSrc}
							alt={division.name}
							fill
							className='hover:scale-105 duration-200'
						/>
					</div>
				</li>
			))}
		</ul>
	)
}
