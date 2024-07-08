'use client'
import Image from 'next/image'
import { RankProps } from '@/types/interfaces'
import useRank from '../hooks/useRank'
import DivisionsModal from './DivisionsModal'

export default function Rank({ level, name, imageSrc, divisions }: RankProps) {
	const { handleShowDivisions, showDivisions, modalRef } = useRank()

	return (
		<li
			key={level}
			className='rounded-xl flex items-center flex-col sm:relative'>
			<p>{name}</p>
			<div
				className='relative size-20 cursor-pointer'
				onClick={handleShowDivisions}>
				<Image
					src={imageSrc}
					alt={name}
					fill
					className='hover:scale-105 duration-200'
				/>
			</div>
			{showDivisions && divisions?.length >= 1 && (
				<DivisionsModal
					modalRef={modalRef}
					divisions={divisions}
					handleShowDivisions={handleShowDivisions}
				/>
			)}
		</li>
	)
}
