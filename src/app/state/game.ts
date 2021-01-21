import { Subject } from "rxjs";
import { NotificationEventType, SwitchUIEventType } from "./game.types";

const Game = {
    NotificationEvent: new Subject<NotificationEventType>(),
    SwitchUIEvent: new Subject<SwitchUIEventType>(),
    PlayereJoinedEvent: new Subject()
};

export default Game;