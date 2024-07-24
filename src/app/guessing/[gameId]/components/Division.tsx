import { DivisionType } from '@/types/DivisionType'
import Image from 'next/image'

export default function Division(props: DivisionType): JSX.Element {
	return (
		<div className='flex flex-col justify-center items-center hover:scale-105 transition-transform'>
			<Image
				src={props.imageSrc}
				alt={props.name}
				width={64}
				height={64}
				className='rounded-full'
			/>
			<span>{props.name}</span>
		</div>
	)
}
