import { notFound } from 'next/navigation'
import Section from '@/components/Section'
import NoClipsFound from './components/NoClipsFound'
import GuessingHeader from './components/GuessingHeader'
import GuessingContent from './components/GuessingContent'
import GuessingFooter from './components/GuessingFooter'
import useClip from '@/hooks/useClip'
import useGame from '@/hooks/useGame'
import type { GuessingProps } from '@/types/props/GuessingProps'

export default async function Guessing(props: GuessingProps) {
	const gameId = props.params.gameId
	if (gameId.length > 15) return notFound()
	const { getClips } = useClip()
	const { getGameById } = useGame()
	const { data: clips, error } = await getClips(gameId, props.searchParams.page)
	const { data: game, error: gameError } = await getGameById(gameId)
	if (error || gameError) return notFound()
	if (clips.length === 0) return NoClipsFound({ gameId })
	return (
		<Section>
			<GuessingHeader clips={clips} />
			<GuessingContent game={game} />
			<GuessingFooter game={game} />
		</Section>
	)
}
