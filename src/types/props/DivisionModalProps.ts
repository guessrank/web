import type { DivisionType } from '@/types/DivisionType'

export interface DivisionsModalProps {
	divisions: DivisionType[]
	handleBackgroundClick: (event: React.MouseEvent) => void
	handleDivisionInnerClick: (event: React.MouseEvent) => void
}
