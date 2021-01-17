export interface ActiveRoundDTO {
    leader_board: GamePlayer[],
    round: number
}
export interface GamePlayer {
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
export interface PlayerJoinedEvent {
    type: "Player Joined",
    data: GamePlayer[]//wront type: array a raha ha same.
}
export interface GameWaitingEvent {
    type: "Game Waiting",
    data: null
}
export interface CountDownStartEvent {
    type: "Countdown Started",
    data: number
}
export interface GameStartedEvent {
    type: "Game Started",
    data: number
}
export interface PlayerLeftEvent {
    type: "Player Left",
    data: null;
}
export interface PlayerRegisteredEvent {
    type: "Player Registered",
    data: GamePlayer

}
export interface GameResultEvent {
    type: "Game Completed",
    data: GamePlayer
}

//other events ...
export type NotificationEventType = PlayerJoinedEvent | PlayerRegisteredEvent | PlayerLeftEvent;
export type SwitchUIEventType = CountingDownEvent | CountDownStartEvent | GameStartedEvent | GameWaitingEvent | GameResultEvent | ActiveRoundEvent;
export type GameEventType = SwitchUIEventType | NotificationEventType
