import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type RankState = {
	level: number
	divisionLevel: number
	setRank: (rank: number) => void
	setDivision: (division: number) => void
}

const useRankStore = create<RankState>()(
	persist(
		(set) => ({
			level: 0,
			divisionLevel: 0,
			setRank: (rank: number) => set({ level: rank }),
			setDivision: (division: number) => set({ divisionLevel: division }),
		}),
		{
			name: 'rank',
		},
	),
)

export default useRankStore
