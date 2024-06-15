export interface ReactNodeProps {
	children: React.ReactNode
}

export interface CardProps {
	src: string
	alt: string
	gameId: string
}

export interface DivisionProps {
	id: number
	name: string
	image: string
}

export interface RankProps {
	id: number
	name: string
	image: string
	divisions: DivisionProps[]
}

export interface GameProps {
	id: string
	name: string
	src: string
	ranks: RankProps[]
}

export interface LogoProps {
	width: number
	height: number
	stroke?: string
	fill?: string
}
