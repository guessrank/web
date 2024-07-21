import Image from 'next/image'
import Button from '@/components/Button'
import Section from '@/components/Section'
import type { GameProps } from '@/types/props/GameProps'

const getGame = async (id: string) => {
	const response = await fetch(
		`http://localhost:3001/api/v1/games?uniqueId=${id}`,
	)
	const data = await response.json()
	return data
}

export default async function Game(props: GameProps): Promise<JSX.Element> {
	const game = await getGame(props.params.uniqueId)
	return (
		<Section>
			<div className='flex flex-col items-center gap-4'>
				<div className='flex flex-col items-center gap-4 text-center'>
					<h1 className='text-3xl font-bold'>{game.body[0].name}</h1>
					<p className='text-lg text-gray-500 w-3/4'>
						{game.body[0].description}
					</p>
				</div>
				<div className='flex items-center justify-center relative w-96 h-96'>
					<Image
						src={game.body[0].imageSrc}
						alt={game.body[0].name}
						width={250}
						height={250}
					/>
				</div>
				<div className='flex gap-2'>
					<Button href={`/guessing/${game.body[0].uniqueId}`}>
						Start guessing
					</Button>
					<Button
						href='/'
						type='secondary'>
						Back to home
					</Button>
				</div>
			</div>
		</Section>
	)
}
