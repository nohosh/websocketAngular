import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GamePlayer } from '../game-state/game.types';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  @Input() players: GamePlayer[];
  constructor() { }

  ngOnInit() {

  }

}
