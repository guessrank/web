import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { SelectionBaseState } from '@/types/states/SelectionBaseState'

const useSelectionStore = create<SelectionBaseState>()(
	persist(
		(set) => ({
			rankLevel: 0,
			divisionLevel: 1,
			setRankLevel: (rankLevel: number) => set({ rankLevel }),
			setDivisionLevel: (divisionLevel: number) => set({ divisionLevel }),
		}),
		{
			name: 'selection',
		},
	),
)

export default useSelectionStore
