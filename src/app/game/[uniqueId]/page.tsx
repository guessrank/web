import Image from 'next/image'
import Button from '@/components/Button'
import Section from '@/components/Section'
import useGame from '@/hooks/useGame'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { GameProps } from '@/types/props/GameProps'

export async function generateMetadata(props: GameProps): Promise<Metadata> {
	const { getGameById } = useGame()
	const { data: game } = await getGameById(props.params.uniqueId)
	if (!game)
		return {
			title: 'Game not found',
			description: 'Game not found',
		}
	return {
		title: game.name + ' - GuessRank',
		description: game.description,
	}
}

export default async function Game(props: GameProps): Promise<JSX.Element> {
	const { getGameById } = useGame()
	const { data: game, error } = await getGameById(props.params.uniqueId)
	if (error || !game) return notFound()
	return (
		<Section>
			<div className='flex flex-col items-center gap-4'>
				<div className='flex flex-col items-center gap-4 text-center'>
					<h1 className='text-3xl font-bold'>{game.name}</h1>
					<p className='text-lg text-gray-500 w-3/4'>{game.description}</p>
				</div>
				<div className='flex items-center justify-center relative w-96 h-96'>
					<Image
						src={game.imageSrc}
						alt={game.name}
						width={250}
						height={250}
					/>
				</div>
				<div className='flex gap-2'>
					<Button href={`/guessing/${game.uniqueId}?page=1`}>
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
