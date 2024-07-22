import Section from '@/components/Section'
import YoutubeFrame from './components/YoutubeFrame'
import useClip from '@/hooks/useClip'
import Invalid from './components/Invalid'
import { notFound } from 'next/navigation'

// TODO: move to types/props folder
interface GuessingProps {
	params: {
		gameId: string
	}
}

export default async function Guessing(props: GuessingProps) {
	const gameId = props.params.gameId
	if (gameId.length > 15) return notFound()
	const { getClips } = useClip()
	const { data: clips, error } = await getClips(gameId, 1)
	if (error) return notFound()
	if (clips.length === 0) return Invalid({ gameId })
	return (
		<Section>
			<YoutubeFrame
				title='test'
				url='https://www.youtube.com/embed/N8Oj9EnU72Q'
			/>
		</Section>
	)
}
