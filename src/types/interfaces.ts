export interface ReactNodeProps {
	children: React.ReactNode
}

export interface CardProps {
	src: string
	alt: string
	gameId: string
}

export interface GameProps {
	id: string
	name: string
	src: string
}

export interface LogoProps {
	width: number
	height: number
	stroke?: string
	fill?: string
}
