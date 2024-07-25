'use client'
import useSelectionStore from '@/store/selection'
import Division from './Division'
import Rank from './Rank'
import type { SelectedRankProps } from '@/types/props/SelectedRankProps'

export default function SelectedRank(props: SelectedRankProps) {
	const { rankLevel, divisionLevel } = useSelectionStore()
	if (rankLevel == 0 && divisionLevel == 0)
		return (
			<h1 className='text-2xl font-bold text-white h-32'>No rank selected</h1>
		)
	const rank = props.game.ranks[rankLevel - 1] || props.game.ranks[0]
	const division = rank.divisions[divisionLevel - 1] || rank.divisions[0]
	return (
		<div className='flex flex-col gap-2 justify-center items-center'>
			<h1 className='text-2xl font-bold text-white'>Selected Rank</h1>
			{rank.divisions.length > 0 && (
				<Division
					level={divisionLevel}
					imageSrc={division?.imageSrc}
					name={division?.name}
				/>
			)}
			{rank.divisions.length === 0 && (
				<Rank
					level={rankLevel}
					name={rank.name}
					imageSrc={rank.imageSrc}
					divisions={rank.divisions}
				/>
			)}
		</div>
	)
}
