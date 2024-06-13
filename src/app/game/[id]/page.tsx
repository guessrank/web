import getGameById from '@/utils/getGameById'
import { GameProps } from '@/types/interfaces'
import { notFound } from 'next/navigation'

export default async function GamePage({
	params,
}: {
	params: {
		id: string
	}
}) {
	const game = (await getGameById({ id: params.id })) as GameProps
	if (!game) return notFound()
	// TODO: styling
	return (
		<main className='flex-col items-center gap-4 p-24 justify-center'>
			<h1 className='text-5xl font-bold w-full text-center'>{game?.name}</h1>
			<div className='w-full flex justify-center'>
				<iframe
					src='https://www.youtube.com/embed/5JLfjnEkeI4?si=XrT-YLTscndMhe_0'
					className=''
					allowFullScreen
					loading='lazy'
					title={game?.name}
				/>
			</div>
		</main>
	)
}
