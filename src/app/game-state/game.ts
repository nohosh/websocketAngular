import { Subject } from "rxjs";
import { ActiveRoundEvent, GameEventType, GamePlayer, NotificationEventType, SwitchUIEventType } from "./game.types";

const Game = {
    NotificationEvent: new Subject<NotificationEventType>(),
    SwitchUIEvent: new Subject<SwitchUIEventType>()
};

export default Game;