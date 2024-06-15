import { RankProps } from '@/types/interfaces'
import Rank from './Rank'

export default function Ranks({ ranks }: { ranks: RankProps[] }) {
	return (
		<ul className='flex gap-8 w-full flex-wrap justify-center relative'>
			{ranks?.map((rank) => (
				<Rank
					key={rank.id}
					id={rank.id}
					name={rank.name}
					image={rank.image}
					divisions={rank.divisions}
				/>
			))}
		</ul>
	)
}
