export interface ActiveRoundDTO {
    leader_board: LeaderBoardDTO[],
    round: number
}
export interface LeaderBoardDTO {
    name: string,
    upper: number,
    lower: number,
    score: number,
    winner: boolean
}
export interface ActiveRoundEvent {
    type: "Played Round",
    data: ActiveRoundDTO
}
export interface CountingDownEvent {
    type: "Counting Down",
    data: number
}
//other events ...

export type GameEvent = ActiveRoundEvent | CountingDownEvent;

