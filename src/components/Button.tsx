import Link from 'next/link'
import type { ButtonProps } from '@/types/props/ButtonProps'

const buttonStyles = {
	primary:
		'flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-black',
	secondary:
		'flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 disabled:opacity-50',
}

export default function Button(props: ButtonProps): JSX.Element {
	const btnClassName = buttonStyles[props.type ?? 'primary']
	if (props.href === undefined) {
		return (
			<button
				type='button'
				className={btnClassName}
				onClick={props.onClick}
				disabled={props.disabled}>
				{props.children}
			</button>
		)
	}
	return (
		<Link
			href={props.href}
			{...props}
			className={btnClassName}>
			{props.children}
		</Link>
	)
}
