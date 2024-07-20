import type { DivisionType } from "./DivisionType"

export interface RankType {
    name: string
    imageSrc: string
    level: number
    divisions: DivisionType[]
}