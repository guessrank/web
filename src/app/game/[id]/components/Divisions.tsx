import { DivisionProps } from '@/types/interfaces'
import Image from 'next/image'

export default function Divisions({
	divisions,
}: {
	divisions: DivisionProps[]
}) {
	return (
		<ul className='flex gap-5 items-center'>
			{divisions?.map((division) => (
				<li key={division.id}>
					<p>{division.name}</p>
					<div className='relative size-20'>
						<Image
							src={division.image}
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
