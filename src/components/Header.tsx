import LogoIcon from '@/components/icons/LogoIcon'

export default function Header(): JSX.Element {
	return (
		<header className='flex flex-col gap-6 justify-center items-center p-4'>
			<section className='flex justify-center items-center gap-4'>
				<LogoIcon
					width={64}
					height={64}
				/>
				<h1 className='text-4xl md:text-3xl'>GuessRank.xyz</h1>
			</section>
		</header>
	)
}