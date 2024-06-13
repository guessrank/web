import Image from 'next/image'
import Link from 'next/link'

export default function Card({ width, height, src, alt, gameId }: any) {
	return (
		<div className='flex flex-col gap-2 w-full'>
			<Link href={`/game/${gameId}`}>
				<Image
					src={src}
					width={width}
					height={height}
					alt={alt}
					className='object-cover rounded-lg'
				/>
			</Link>
		</div>
	)
}
