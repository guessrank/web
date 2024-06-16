import getGameById from '@/utils/getGameById'
import { GameProps } from '@/types/interfaces'
import { notFound } from 'next/navigation'
import Ranks from './components/Ranks'
import Button from '@/components/Button'
import LinkButton from '@/components/LinkButton'

export default async function GamePage({
	params,
}: {
	params: {
		id: string
	}
}) {
	const game = (await getGameById({ id: params.id })) as GameProps
	if (!game) return notFound()

	return (
		<section className='w-full max-w-layout flex justify-center items-center flex-col gap-10'>
			<h1 className='text-4xl font-bold w-full text-center'>{game?.name}</h1>
			<div className='w-full flex justify-center'>
				<iframe
					src='https://www.youtube.com/embed/5JLfjnEkeI4?si=XrT-YLTscndMhe_0'
					className='w-[800px] h-[400px]'
					allowFullScreen
					loading='lazy'
					title={game?.name}
				/>
			</div>
			<section className='flex justify-center w-full'>
				<Ranks ranks={game?.ranks} />
			</section>
			<section className='flex gap-5 justify-center w-full'>
				<Button>Report video</Button>
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
