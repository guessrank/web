'use client'
import { RankProps } from '@/types/interfaces'
import Rank from './Rank'
import useRankStore from '@/store/rank.store'

export default function Ranks({ ranks }: { ranks: RankProps[] }) {
	const level = useRankStore((state) => state.level)
	const divisionLevel = useRankStore((state) => state.divisionLevel)
	return (
		<div className='flex flex-col items-center gap-5'>
			<h1 className='text-3xl font-bold text-center'>
				You selected Rank: {level} and Division: {divisionLevel}
			</h1>
			<ul className='flex gap-8 w-full flex-wrap justify-center relative'>
				{ranks?.map((rank) => (
					<Rank
						key={rank.level}
						level={rank.level}
						name={rank.name}
						imageSrc={rank.imageSrc}
						divisions={rank.divisions}
					/>
				))}
			</ul>
		</div>
	)
}
