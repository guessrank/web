import type { LinkProps } from 'next/link'

export type ButtonProps = Partial<Pick<LinkProps, 'href'>> & {
	children: React.ReactNode
	type?: 'primary' | 'secondary'
	onClick?: () => void
	disabled?: boolean
}
