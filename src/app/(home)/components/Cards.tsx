import Card from './Card'

export default function Cards() {
	return (
		<div className='flex gap-4'>
			<Card
				width={164}
				height={164}
				src='/assets/rocket-league.webp'
				alt='Rocket League'
				gameId={0}
			/>

			<Card
				width={164}
				height={164}
				src='/assets/valorant.webp'
				alt='Valorant'
				gameId={1}
			/>
		</div>
	)
}
