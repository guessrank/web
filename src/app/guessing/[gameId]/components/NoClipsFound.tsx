'use client'
import Button from '@/components/Button'
import Section from '@/components/Section'
import useSelectionStore from '@/store/selection'
import type { NoClipsFoundProps } from '@/types/props/NoClipsFoundProps'
import { useEffect } from 'react'

export default function NoClipsFound(props: NoClipsFoundProps) {
	const { setRankLevel, setDivisionLevel } = useSelectionStore()
	useEffect(() => {
		setRankLevel(0)
		setDivisionLevel(0)
	}, [])
	return (
		<Section>
			<div className='flex flex-col items-center gap-4 text-center'>
				<h1 className='text-2xl font-bold'>
					No clips found for{' '}
					<span className='text-indigo-500'>{props.gameId.toUpperCase()}</span>
				</h1>
				<p className='text-gray-500'>
					Ups! It seems that there are no more clips for this game.
				</p>
				<div className='flex flex-col justify-center gap-4 w-1/2 pt-10'>
					<Button href='/'>Go back to home</Button>
					<p className='text-gray-500'>Or</p>
					<Button
						href={`/upload/${props.gameId}`}
						type='secondary'>
						{' '}
						Upload a clip
					</Button>
				</div>
			</div>
		</Section>
	)
}
