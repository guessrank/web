import Section from '@/components/Section'
import Button from '@/components/Button'
import Description from '@/components/Description'
import type { NotFoundProps } from '@/types/props/NotFoundProps'

export default function NotFound(props: NotFoundProps): JSX.Element {
	return (
		<Section>
			<div className='flex flex-col items-center gap-4'>
				<h1 className='text-2xl font-bold text-red-500'>Error 404</h1>
				<Description>
					{props.message || 'The page you are looking for does not exist'}
				</Description>
			</div>
			<Button href={'/'}>Go back home</Button>
		</Section>
	)
}
