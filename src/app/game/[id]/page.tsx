import { notFound } from 'next/navigation'
import Ranks from './components/Ranks'
import Button from '@/components/Button'
import LinkButton from '@/components/LinkButton'
import useClip from './hooks/useClip'
import Clips from './components/Clips'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { GameProps } from '@/types/interfaces'
import getGameById from '@/utils/getGameById'

export default async function GamePage({
	params,
}: {
	params: {
		id: string
	}
}) {
	const { queryClient, prefetchClipsQuery } = useClip()
	await prefetchClipsQuery(params.id)
	// TODO: implement useGame and migrate json to the API
	const game = (await getGameById({ id: params.id })) as GameProps
	if (!game) return notFound()

	return (
		<section className='w-full max-w-layout flex justify-center items-center flex-col gap-10'>
			<h1 className='text-4xl font-bold w-full text-center'>{game?.name}</h1>
			<section className='w-full flex justify-center'>
				<HydrationBoundary state={dehydrate(queryClient)}>
					<Clips params={params} />
				</HydrationBoundary>
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
						href: `/game/${game.id}/upload`,
					}}>
					Upload a clip
				</LinkButton>
			</section>
		</section>
	)
}
