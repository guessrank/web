'use client'
import Image from 'next/image'
import Divisions from './Divisions'
import { RankProps } from '@/types/interfaces'
import useRank from '../hooks/useRank'

export default function Rank({ id, name, image, divisions }: RankProps) {
	const { handleShowDivisions, showDivisions, modalRef } = useRank()

	return (
		<li
			key={id}
			className='rounded-xl flex items-center flex-col relative'>
			<p>{name}</p>
			<div
				className='relative size-20 cursor-pointer'
				onClick={handleShowDivisions}>
				<Image
					src={image}
					alt={name}
					fill
					className='hover:scale-105 duration-200'
				/>
			</div>
			{showDivisions && (
				<div
					className='absolute inset-0 top-[100%] -left-[calc(100%+16px)] border border-red-500 p-2 rounded-xl z-10 bg-slate-600 w-min flex justify-center h-max'
					ref={modalRef}>
					<Divisions divisions={divisions} />
				</div>
			)}
		</li>
	)
}
