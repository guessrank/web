export interface SelectionBaseState {
	rankLevel: number
	divisionLevel: number
	setRankLevel: (rankLevel: number) => void
	setDivisionLevel: (divisionLevel: number) => void
}
