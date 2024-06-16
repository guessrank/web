import { ButtonProps } from '@/types/interfaces'

export default function ButtonLayout({
	props,
	children,
	className,
}: {
	props: ButtonProps
	className: string
	children: React.ReactNode
}) {
	return (
		<button
			{...props}
			className={className}>
			{children}
		</button>
	)
}
