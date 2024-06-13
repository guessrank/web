export interface ReactNodeProps {
	children: React.ReactNode
}

export interface CardProps {
	width: number
	height: number
	src: string
	alt: string
	gameId: string
}

export interface GameProps {
	id: string
	name: string
	src: string
}
