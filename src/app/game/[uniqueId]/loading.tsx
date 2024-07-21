import Section from '@/components/Section'
import Loading from '@/components/Loading'

export default function NotFound(): JSX.Element {
	return (
		<Section>
			<h1 className='text-4xl font-bold'>Loading game...</h1>
			<Loading />
		</Section>
	)
}
