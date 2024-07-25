'use client'
import Button from '@/components/Button'
import type { GameType } from '@/types/GameType'

interface GuessingFooterProps {
	game: GameType
}

export default function GuessingFooter(props: GuessingFooterProps) {
	return (
		<div className='flex justify-center w-full gap-4'>
			<Button type='danger'> Report Clip</Button>
			<Button type='secondary'> Upload Clip</Button>
		</div>
	)
}
