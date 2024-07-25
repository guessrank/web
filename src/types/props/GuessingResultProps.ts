import { ResultState } from '../states/ResultState'

export interface GuessingResultProps {
	result: ResultState
	innerRef: React.RefObject<HTMLDivElement>
	closeResultModal: (
		resultRefDiv: React.RefObject<HTMLDivElement>,
	) => () => void
}
