import { DivisionsModalProps } from '@/types/interfaces'
import Divisions from './Divisions'

export default function DivisionsModal({
	modalRef,
	divisions,
	handleShowDivisions,
}: DivisionsModalProps) {
	return (
		<section
			className='absolute inset-0 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:top-[100%] sm:-left-[calc(100%+16px)] border border-amber p-2 rounded-xl z-10 bg-shark w-min flex justify-center h-max'
			ref={modalRef}>
			<div className='flex gap-5 items-center flex-col justify-center'>
				<header className='flex'>
					<p>Divisions</p>
					<button
						className='right-4 top-2 absolute hover:text-amber duration-200'
						onClick={handleShowDivisions}>
						X
					</button>
				</header>
				<Divisions divisions={divisions} />
			</div>
		</section>
	)
}
