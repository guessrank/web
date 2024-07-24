'use client'
import useSelectionStore from '@/store/selection'
import type { GameType } from '@/types/GameType'
import Division from './Division'
import Rank from './Rank'
interface GuessingFooterProps {
	game: GameType
}

export default function GuessingFooter(props: GuessingFooterProps) {
	const { rankLevel, divisionLevel } = useSelectionStore()
	const rank = props.game.ranks[rankLevel - 1]
	const division = rank.divisions[divisionLevel - 1]
	if (!rank || !division) return <h1> No rank or division found </h1>
	return (
		<div className='flex justify-center mt-8'>
			{rank.divisions && (
				<Division
					level={divisionLevel}
					imageSrc={division?.imageSrc}
					name={division?.name}
				/>
			)}
		</div>
	)
}
