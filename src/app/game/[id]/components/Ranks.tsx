import { RankProps } from '@/types/interfaces'
import Rank from './Rank'

export default function Ranks({ ranks }: { ranks: RankProps[] }) {
	console.log(ranks)
	return (
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
	)
}
