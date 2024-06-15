import { useCallback, useEffect, useRef, useState } from 'react'

const useRank = () => {
	const [showDivisions, setShowDivisions] = useState(false)
	const modalRef = useRef<HTMLDivElement>(null)

	const handleShowDivisions = useCallback(() => {
		setShowDivisions(!showDivisions)
	}, [showDivisions])

	useEffect(() => {
		const handleClickOutside = (
			event:
				| MouseEvent
				| TouchEvent
				| PointerEvent
				| KeyboardEvent
				| FocusEvent
				| Event,
		) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				handleShowDivisions()
			}
		}
		if (showDivisions)
			document.addEventListener('mousedown', handleClickOutside)
		else document.removeEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [showDivisions, handleShowDivisions])

	return { handleShowDivisions, showDivisions, modalRef }
}

export default useRank
