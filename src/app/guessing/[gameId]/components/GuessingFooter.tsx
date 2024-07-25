'use client'
import useSelectionStore from '@/store/selection'
import type { GameType } from '@/types/GameType'
import Division from './Division'
import Rank from './Rank'
interface GuessingFooterProps {
	game: GameType
}

export default function GuessingFooter(props: GuessingFooterProps) {
	return <div className='flex justify-center mt-8'></div>
}
