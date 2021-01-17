import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import initWebSocket from './websocket';
import { MatDialog } from '@angular/material/dialog';
import { JoinGameComponent } from './join-game/join-game.component';
import { GameEventType, SwitchUIEventType } from './game-state/game.types';
import Game from './game-state/game';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    public dialog: MatDialog) { }
  appState: SwitchUIEventType;

  join() {
    const dialogRef = this.dialog.open(JoinGameComponent, {
      width: '250px'
    });
  }
  kill() { }

  ngOnInit() {
    initWebSocket();
    Game.SwitchUIEvent.subscribe(event => {
      console.log(event);
      this.appState = event
    })
    Game.NotificationEvent.subscribe(console.log);
  }
}

