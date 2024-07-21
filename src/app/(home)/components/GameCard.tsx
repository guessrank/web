import { GameCardProps } from '@/types/props/GameCardProps'
import Link from 'next/link'
import Image from 'next/image'

export default function GameCard({ uniqueId, source, title }: GameCardProps) {
	return (
		<li
			key={uniqueId}
			className='flex hover:scale-105 hover:opacity-80 duration-200'>
			<Link
				href={`/game/${uniqueId}`}
				className='relative w-screen max-w-52 min-h-64'>
				<Image
					src={source}
					alt={title}
					fill
					className='object-cover rounded-lg absolute inset-0'
				/>
			</Link>
		</li>
	)
}
