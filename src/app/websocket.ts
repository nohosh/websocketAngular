import { webSocket } from 'rxjs/webSocket';
import { GameEvent } from './game-state/game.types'
import Game from './game-state/game'

const initWebSocket = () => {
    const socket = webSocket(`ws://localhost:8089/subscribe`);
    socket.subscribe(
        (msg: GameEvent) => {
            switch (msg.type) {
                case "Played Round":
                    Game.ActiveRoundEvents.next(msg.data)
                    break;
                case "Counting Down":
                    Game.CountingDownEvent.next(msg);
            }
        },
        err => console.log(err),
        () => console.log(`complete`)
    );
}
export default initWebSocket;