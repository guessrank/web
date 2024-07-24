import type { RankType } from '@/types/RankType'
import Image from 'next/image'

export default function Rank(props: RankType) {
	return (
		<div
			key={props.level}
			className='flex sm:flex-col w-full items-center justify-center'>
			<div className='flex w-full items-center justify-center hover:scale-105 transition-transform'>
				<Image
					src={props.imageSrc}
					alt={props.name}
					width={64}
					height={64}
				/>
			</div>
			<div className='flex w-full sm:justify-center items-center text-center'>
				<p className='text-white'>{props.name}</p>
			</div>
		</div>
	)
}
