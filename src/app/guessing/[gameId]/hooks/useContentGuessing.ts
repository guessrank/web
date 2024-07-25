import { useState } from 'react'
import useSelectionStore from '@/store/selection'

const useContentGuessing = () => {
	const [isDivisionModalVisible, setIsDivisionModalVisible] = useState(false)
	const { divisionLevel, setRankLevel, setDivisionLevel } = useSelectionStore(
		(state) => state,
	)

	const handleRankItemClick = (event: React.MouseEvent) => {
		setIsDivisionModalVisible(true)
		setRankLevel(parseInt(event.currentTarget.id))
	}

	const handleBackgroundClick = (event: React.MouseEvent) => {
		event.stopPropagation()
		setIsDivisionModalVisible(false)
		if (divisionLevel === 0) setDivisionLevel(1)
	}

	const handleDivisionModalInnerClick = (event: React.MouseEvent) => {
		event.stopPropagation()
		setIsDivisionModalVisible(false)
		setDivisionLevel(parseInt(event.currentTarget.id))
	}

	return {
		isDivisionModalVisible,
		handleRankItemClick,
		handleBackgroundClick,
		handleDivisionModalInnerClick,
	}
}

export default useContentGuessing
