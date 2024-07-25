import Section from '@/components/Section'
import RankItem from './RankItem'
import type { GuessingContentProps } from '@/types/props/GuessingContentProps'
import SelectedRank from './SelectedRank'
export default function GuessingContent(props: GuessingContentProps) {
	return (
		<Section>
			<SelectedRank game={props.game} />
			<ul className='flex flex-col gap-2 sm:flex-row w-full justify-center items-center'>
				{props.game.ranks.map((rank) => (
					<RankItem
						level={rank.level}
						name={rank.name}
						imageSrc={rank.imageSrc}
						divisions={rank.divisions}
					/>
				))}
			</ul>
		</Section>
	)
}
