export interface Clip {
	url: string
	rank: string
	division: string
	gameId: string
	approved: boolean
	uniqueId: string
}

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
	uniqueId: string
	name: string
	imageSrc: string
	description: string
	ranks: RankProps[]
}

export interface GamePageProps {
	params: {
		id: string
	}
}

export interface GamePageMetadataProps {
	title: string
	description: string
}

export interface LogoProps {
	width: number
	height: number
	stroke?: string
	fill?: string
}

export interface DivisionsModalProps {
	modalRef: React.RefObject<HTMLDivElement>
	divisions: DivisionProps[]
	handleShowDivisions: () => void
}

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
