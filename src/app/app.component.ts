import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import Game from './game-state/game';
import { ResponseDTO } from './responseDTO';
import initWebSocket from './websocket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }
  title = 'ws-app';
  socket = webSocket(`ws://localhost:8089/subscribe`);
  x = 0;
  leaderboardData = ""
  countdown = "";
  start() {
    initWebSocket();
  }
  hit() {
    this.x++;
    this.http.post<ResponseDTO>(`http://localhost:8089/join`, { "name": `sanchit${this.x}`, "first": Math.floor(Math.random() * 10) + 1, "second": Math.floor(Math.random() * 10) + 1 }).subscribe(console.log, console.log);
  }

  ngOnInit() {
    Game.ActiveRoundEvents.subscribe((data) => { this.leaderboardData = JSON.stringify(data); this.countdown = "" });
    Game.CountingDownEvent.subscribe((data) => { this.countdown = JSON.stringify(data.data) });
  }
}
