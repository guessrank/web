import Section from "./Section";

export default function Maintenance(): JSX.Element {
    return (
        <main className='flex flex-col items-center gap-4 p-6 w-full h-full min-h-[calc(100vh-56px)]'>
            <Section>
                <h1 className='text-4xl'>Under Maintenance</h1>
                <p className='text-lg'>We are currently under maintenance. Please check back later.</p>
            </Section>
        </main>
    )
}