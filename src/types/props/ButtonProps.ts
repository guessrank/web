import type { LinkProps } from 'next/link'

export type ButtonProps = Partial<Pick<LinkProps, 'href'>> & {
	children: React.ReactNode
	type?: 'primary' | 'secondary' | 'danger'
	onClick?: () => void
	disabled?: boolean
}
