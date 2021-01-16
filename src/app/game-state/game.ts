import { Subject } from "rxjs";
import { ActiveRoundDTO, CountingDownEvent } from "./game.types";

const Game = {
    ActiveRoundEvents: new Subject<ActiveRoundDTO>(),
    CountingDownEvent: new Subject<CountingDownEvent>()
}

export default Game;