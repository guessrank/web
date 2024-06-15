import Link, { LinkProps } from 'next/link'

export default function LinkButtonLayout({
	props,
	children,
	className,
}: {
	props: LinkProps
	className: string
	children: React.ReactNode
}) {
	return (
		<Link
			{...props}
			className={className}>
			{children}
		</Link>
	)
}
