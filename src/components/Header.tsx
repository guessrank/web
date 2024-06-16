import LogoIcon from './LogoIcon'

export default function Header() {
	return (
		<header className='flex flex-col gap-6 justify-center items-center'>
			<div className='flex justify-center items-center gap-4'>
				<LogoIcon
					width={100}
					height={100}
				/>
				<h1 className='text-4xl md:text-5xl'>GuessRank.xyz</h1>
			</div>
		</header>
	)
}
