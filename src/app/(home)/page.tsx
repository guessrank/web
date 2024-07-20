import Maintenance from "@/components/Maintenance";
import Section from "@/components/Section";
import useGame from "@/hooks/useGame"
import GameCard from "./components/GameCard";
import type { GameType } from "@/types/GameType";

export default async function Home(): Promise<JSX.Element> {
    const { getAllGames } = useGame();
    const { data, error } = await getAllGames();
    console.log(error)
    if (error)
        return <Maintenance/>
	return (
		<main className='flex flex-col items-center gap-4 p-6 w-full h-full min-h-[calc(100vh-56px)]'>
			<Section>
                <ul className='flex flex-wrap gap-4'>
                    {data?.map((game: GameType, index: number) => (
                        <GameCard 
                            key={index}
                            uniqueId={game.uniqueId}
                            title={game.name}
                            source={game.imageSrc}/>
                    ))}
                </ul>
            </Section>
		</main>
	)
}