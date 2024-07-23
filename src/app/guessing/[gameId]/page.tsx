import Section from '@/components/Section'
import Invalid from './components/Invalid'
import GuessingHeader from './components/GuessingHeader'
import { notFound } from 'next/navigation'
import useClip from '@/hooks/useClip'
import type { GuessingProps } from '@/types/props/GuessingProps'

export default async function Guessing(props: GuessingProps) {
	const gameId = props.params.gameId
	if (gameId.length > 15) return notFound()
	const { getClips } = useClip()
	const { data: clips, error } = await getClips(gameId, props.searchParams.page)
	if (error) return notFound()
	if (clips.length === 0) return Invalid({ gameId })
	return (
		<Section>
			<GuessingHeader clips={clips} />
			{/*<GuessingContent />*/}
			{/*<GuessingFooter />*/}
		</Section>
	)
}
