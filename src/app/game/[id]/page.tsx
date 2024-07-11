import { notFound } from 'next/navigation'
import Ranks from './components/Ranks'
import Button from '@/components/Button'
import LinkButton from '@/components/LinkButton'
import Clips from './components/Clips'
import useGame from './hooks/useGame'
import useClip from './hooks/useClip'
import { gameService } from '@/services/gameService'
import type { GamePageProps } from '@/types/interfaces'
import type { GamePageMetadataProps } from '@/types/interfaces'

export async function generateMetadata({
	params,
}: GamePageProps): Promise<GamePageMetadataProps> {
	const { data } = await gameService.get(params.id)
	if (data?.body?.length === 0) return { title: 'Not found', description: '' }
	const game = data?.body[0]
	return {
		title: game?.name + ' | GuessRank.xyz',
		description: game?.description,
	}
}

export default async function GamePage({ params }: GamePageProps) {
	const { getGameById } = useGame()
	const { getClipsById, shuffleClips } = useClip()
	const { data: game, error } = await getGameById(params.id)

	if (error)
		return (
			<h2 className='text-xl md:text-2xl text-center text-gray-100'>
				{error?.message}
			</h2>
		)
	if (!game) return notFound()
	const { data: rawClips } = await getClipsById(params.id)
	let clips = shuffleClips(rawClips?.body)

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
