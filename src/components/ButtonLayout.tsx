import { ButtonProps } from '@/types/interfaces'

export default function ButtonLayout({
	props,
	children,
}: {
	props: ButtonProps
	children: React.ReactNode
}) {
	return <button {...props}>{children}</button>
}
