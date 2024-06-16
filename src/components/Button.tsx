import { ButtonProps } from '@/types/interfaces'
import ButtonLayout from './ButtonLayout'

export default function Button({
	children,
	customClassName,
	props,
}: {
	children: React.ReactNode
	customClassName?: string
	props?: ButtonProps
}) {
	const className = `p-4 py-2 text-center flex justify-center items-center bg-sunglow text-black rounded-lg hover:bg-amber duration-200 ${
		customClassName ? customClassName : ''
	}`

	return (
		<ButtonLayout
			props={{
				...props,
			}}
			className={className}>
			{children}
		</ButtonLayout>
	)
}
