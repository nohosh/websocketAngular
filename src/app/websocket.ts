import { webSocket } from 'rxjs/webSocket';
import { GameEvents, GameEventType } from './state/game.types'
import Game from './state/game'

const socket = webSocket(`ws://localhost:8089/subscribe`);
const initWebSocket = () => {
    socket.subscribe(
        (event: GameEventType) => {
            switch (event.type) {
                case GameEvents.CountDownStarted:
                case GameEvents.CountingDown:
                case GameEvents.GameStarted:
                case GameEvents.GameWaiting:
                case GameEvents.PlayerRound:
                case GameEvents.GameCompleted:
                    Game.SwitchUIEvent.next(event)
                    break;
                case GameEvents.PlayerJoined:
                case GameEvents.PlayerLeft:
                case GameEvents.PlayerRegisterd:
                    Game.NotificationEvent.next(event)
                    break;
            }
        },
        err => console.log(err),
        () => console.log(`complete`)
    );
}
export default initWebSocket;