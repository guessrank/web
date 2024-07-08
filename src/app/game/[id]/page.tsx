import { notFound } from 'next/navigation'
import Ranks from './components/Ranks'
import Button from '@/components/Button'
import LinkButton from '@/components/LinkButton'
import Clips from './components/Clips'
import useGame from './hooks/useGame'
import useClip from './hooks/useClip'
import type { GamePageProps } from '@/types/interfaces'
import type { GamePageMetadataProps } from '@/types/interfaces'
import { gameService } from '@/services/gameService'
import useRankStore from '@/store/rank.store'

export async function generateMetadata({
	params,
}: GamePageProps): Promise<GamePageMetadataProps> {
	const { body } = await gameService.get(params.id)
	if (body.length === 0) return { title: 'Not found', description: '' }
	const game = body[0]
	return {
		title: game?.name + ' | GuessRank.xyz',
		description: game?.description,
	}
}

export default async function GamePage({ params }: GamePageProps) {
	const { getGameById } = useGame()
	const { getClipsById, shuffleClips } = useClip()
	const game = await getGameById(params.id)
	if (!game) return notFound()
	const res = await getClipsById(params.id)
	let clips = shuffleClips(res)

	return (
		<section className='w-full max-w-layout flex justify-center items-center flex-col gap-10'>
			<h1 className='text-4xl font-bold w-full text-center'>{game?.name}</h1>
			<section className='w-full flex justify-center'>
				<Clips clips={clips} />
			</section>
			<section className='flex justify-center w-full'>
				<Ranks ranks={game?.ranks} />
			</section>
			<section className='flex gap-5 justify-center w-full'>
				<Button customClassName='!bg-shark text-white border border-transparent hover:border-sunglow'>
					Report video
				</Button>
				<LinkButton
					props={{
						href: `/game/${game?.id}/upload`,
					}}>
					Upload a clip
				</LinkButton>
			</section>
		</section>
	)
}
