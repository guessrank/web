import LinkButtonLayout from './LinkButtonLayout'
import { LinkProps } from 'next/link'

export default function LinkButton({
	children,
	customClassName,
	props,
}: {
	children: React.ReactNode
	customClassName?: string
	props: LinkProps
}) {
	const className = `p-4 py-2 text-center flex justify-center items-center bg-sunglow text-black rounded-lg hover:bg-amber duration-200 ${
		customClassName ? customClassName : ''
	}`

	return (
		<LinkButtonLayout
			props={{
				...props,
			}}
			className={className}>
			{children}
		</LinkButtonLayout>
	)
}
