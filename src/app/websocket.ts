import { webSocket } from 'rxjs/webSocket';
import { GameEventType, NotificationEventType } from './game-state/game.types'
import Game from './game-state/game'


const socket = webSocket(`ws://localhost:8089/subscribe`);
const initWebSocket = () => {

    socket.subscribe(
        (event: GameEventType) => {
            switch (event.type) {
                case "Countdown Started":
                case "Counting Down":
                case "Game Started":
                case "Game Waiting":
                case "Played Round":
                case "Game Completed":
                    Game.SwitchUIEvent.next(event)
                    break;
                case "Player Joined":
                case "Player Left":
                case "Player Registered":
                    Game.NotificationEvent.next(event)
                    break;
            }
        },
        err => console.log(err),
        () => console.log(`complete`)
    );
}
export default initWebSocket;