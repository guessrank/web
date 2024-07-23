import type { DefaultChildProps } from '@/types/props/DefaultChildProps'

export default function Description(props: DefaultChildProps) {
	return <p className='text-gray-500'>{props.children}</p>
}
