import { ReactNode } from 'react'

export default function Section({ children }: { children: ReactNode }): JSX.Element {
    return (
        <section className='flex justify-center flex-col items-center max-w-layout w-full gap-24'>
            {children}
        </section>
    )
}