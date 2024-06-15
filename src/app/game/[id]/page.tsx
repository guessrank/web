import getGameById from '@/utils/getGameById'
import { GameProps } from '@/types/interfaces'
import { notFound } from 'next/navigation'
import Ranks from './components/Ranks'

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
		<main className='w-full flex items-center gap-4 p-6 justify-center h-full min-h-[calc(100vh-56px)]'>
			<section className='w-full max-w-layout flex justify-center items-center flex-col gap-10'>
				<h1 className='text-5xl font-bold w-full text-center'>{game?.name}</h1>
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
			</section>
		</main>
	)
}
