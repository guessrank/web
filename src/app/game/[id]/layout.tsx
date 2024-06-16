import getGameById from '@/utils/getGameById'
import LinkButton from '@/components/LinkButton'
import type { Metadata } from 'next'

type Props = {
	params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const game = await getGameById({ id: params.id })
	if (!game) return { title: 'Not found' }
	return {
		title: game.name,
		description: game.description,
	}
}

export default function GameLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main className='w-full flex flex-col sm:items-center gap-4 p-6 justify-center h-full min-h-[calc(100vh-56px)]'>
			<LinkButton
				props={{
					href: '/',
				}}
				customClassName='sm:absolute left-5 top-5 max-w-max'>
				Back to home
			</LinkButton>
			{children}
		</main>
	)
}
