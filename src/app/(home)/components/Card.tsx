import { CardProps } from '@/types/interfaces'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({ src, alt, gameId }: CardProps) {
	return (
		<div className='flex hover:scale-105 hover:opacity-80 duration-200'>
			<Link
				href={`/game/${gameId}`}
				className='relative w-screen max-w-52 min-h-64'>
				<Image
					src={src}
					alt={alt}
					fill
					className='object-cover rounded-lg absolute inset-0'
				/>
			</Link>
		</div>
	)
}
