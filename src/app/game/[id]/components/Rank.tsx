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
			className='rounded-xl flex items-center flex-col sm:relative'>
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
			{showDivisions && divisions?.length >= 1 && (
				<div
					className='absolute inset-0 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:top-[100%] sm:-left-[calc(100%+16px)] border border-amber p-2 rounded-xl z-10 bg-shark w-min flex justify-center h-max'
					ref={modalRef}>
					<div className='flex gap-5 items-center flex-col justify-center'>
						<header className='flex'>
							<p>Divisiones</p>
							<button
								className='right-4 top-2 absolute hover:text-amber duration-200'
								onClick={handleShowDivisions}>
								X
							</button>
						</header>
						<Divisions divisions={divisions} />
					</div>
				</div>
			)}
		</li>
	)
}
