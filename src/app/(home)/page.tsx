import Cards from './components/Cards'
import LogoIcon from '@/components/LogoIcon'

export default function Home() {
	return (
		<main className='flex flex-col items-center gap-4 p-6 w-full h-full min-h-[calc(100vh-56px)]'>
			<section className='max-w-layout w-full flex justify-center flex-col items-center gap-24'>
				<header className='flex flex-col gap-6 justify-center items-center'>
					<div className='flex justify-center items-center gap-4'>
						<LogoIcon
							width={100}
							height={100}
						/>
						<h1 className='text-4xl md:text-5xl'>GuessRank.xyz</h1>
					</div>
					<h2 className='text-xl md:text-2xl text-center'>
						Select a game to start guessing
					</h2>
				</header>
				<Cards />
			</section>
		</main>
	)
}
