import { Component, Input, OnInit } from '@angular/core';
import { GamePlayer } from '../game-state/game.types';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss']
})
export class GameResultComponent implements OnInit {
  @Input() winner: GamePlayer
  constructor() { }

  ngOnInit() {
  }

}
