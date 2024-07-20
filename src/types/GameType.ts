import type { RankType } from "@/types/RankType";

export interface GameType {
    uniqueId: string
    name: string
    imageSrc: string
    description: string
    ranks: RankType[]
}
