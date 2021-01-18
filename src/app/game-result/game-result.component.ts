import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { GamePlayer } from '../game-state/game.types';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0, transform: 'scale(0.75)' }),
        animate(150, style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('fade-in', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-5%)' }),
        animate(200, style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class GameResultComponent implements OnInit {
  @Input() winner: GamePlayer
  constructor() { }

  ngOnInit() {
  }

}
