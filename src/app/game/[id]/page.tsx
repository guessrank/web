export default function GamePage({ params }: any) {
	return (
		<main className='flex-col items-center gap-4 p-24'>
			<h1 className='text-5xl font-bold'>{params.id}</h1>
		</main>
	)
}
