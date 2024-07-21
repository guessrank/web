import type { DefaultChildProps } from '@/types/props/DefaultChildProps'

export default function Section(props: DefaultChildProps): JSX.Element {
	return (
		<section className='flex justify-center flex-col items-center max-w-layout w-full gap-12'>
			{props.children}
		</section>
	)
}
