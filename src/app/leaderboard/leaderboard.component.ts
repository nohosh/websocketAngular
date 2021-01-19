import { animate, state, style, transition, trigger } from '@angular/animations';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActiveRoundDTO, GamePlayer } from '../game-state/game.types';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
  animations: [
    trigger('fade-in', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-5%)' }),
        animate(200, style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0, transform: 'scale(0.75)' }),
        animate(150, style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class LeaderboardComponent implements OnInit {
  @Input() data: ActiveRoundDTO[];
  @Input() newPlayers: string[];
  constructor() { }
  user;
  displayedColumns: string[] = ['position', 'name', 'lower', 'upper', 'score'];
  ngOnInit() {
    console.log(this.newPlayers)
    if (localStorage.getItem('joined')) {
      this.user = localStorage.getItem('player');
    }
  }

}
