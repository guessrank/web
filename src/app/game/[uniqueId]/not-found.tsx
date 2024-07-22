import Section from '@/components/Section'
import Button from '@/components/Button'

export default function GameNotFound(): JSX.Element {
	return (
		<Section>
			<div className='flex flex-col items-center gap-4'>
				<h1 className='text-4xl font-bold text-red-700'>404</h1>
				<p className='text-lg'>Game not found</p>
			</div>
			<Button href={'/'}>Go back home</Button>
		</Section>
	)
}
