import Section from '@/components/Section'
import Button from '@/components/Button'

export default function NotFound(): JSX.Element {
	return (
		<Section>
			<h1 className='text-4xl font-bold'>404</h1>
			<p className='text-lg'>Page not found</p>
			<Button href={'/'}>Go back home</Button>
		</Section>
	)
}
