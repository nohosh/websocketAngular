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

export enum GameEvents {
    PlayerRound = "Played Round",
    CountingDown = "Counting Down",
    PlayerJoined = "Player Joined",
    GameWaiting= "Game Waiting",
    CountDownStarted = "Countdown Started",
    GameStarted = "Game Started",
    PlayerLeft = "Player Left",
    PlayerRegisterd = "Player Registered",
    GameCompleted = "Game Completed"
}

export interface ActiveRoundEvent {
    type: GameEvents.PlayerRound,
    data: ActiveRoundDTO
}

export interface CountingDownEvent {
    type: GameEvents.CountingDown,
    data: number
}

export interface PlayerJoinedEvent {
    type: GameEvents.PlayerJoined,
    data: GamePlayer[]
}

export interface GameWaitingEvent {
    type: GameEvents.GameWaiting,
    data: null
}

export interface CountDownStartEvent {
    type: GameEvents.CountDownStarted,
    data: number
}

export interface GameStartedEvent {
    type: GameEvents.GameStarted
    data: number
}

export interface PlayerLeftEvent {
    type: GameEvents.PlayerLeft,
    data: null;
}

export interface PlayerRegisteredEvent {
    type: GameEvents.PlayerRegisterd,
    data: {
        players: GamePlayer[],
        round: number,
        numbers: number[],
        top_score: number,
        winner: GamePlayer,
    }
}

export interface GameResultEvent {
    type: GameEvents.GameCompleted,
    data: GamePlayer
}

//Grouped events ...
export type NotificationEventType = PlayerJoinedEvent | PlayerRegisteredEvent | PlayerLeftEvent;

export type SwitchUIEventType = CountingDownEvent | CountDownStartEvent | GameStartedEvent | GameWaitingEvent | GameResultEvent | ActiveRoundEvent;

export type GameEventType = SwitchUIEventType | NotificationEventType
