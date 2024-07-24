'use client'
import Rank from './Rank'
import DivisionsModal from './DivisionsModal'
import useContentGuessing from '../hooks/useContentGuessing'
import type { RankType } from '@/types/RankType'

export default function RankItem(props: RankType) {
	const {
		handleRankItemClick,
		handleBackgroundClick,
		handleDivisionModalInnerClick,
		isDivisionModalVisible,
	} = useContentGuessing()
	const hasDivisions = props.divisions.length !== 0
	return (
		<li
			id={props.level.toString()}
			key={props.level}
			onClick={handleRankItemClick}
			className='flex sm:flex-col items-center w-1/2 sm:w-full text-center hover:cursor-pointer'>
			<Rank {...props} />
			{isDivisionModalVisible && hasDivisions && (
				<DivisionsModal
					divisions={props.divisions}
					handleBackgroundClick={handleBackgroundClick}
					handleDivisionInnerClick={handleDivisionModalInnerClick}
				/>
			)}
		</li>
	)
}
