import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import initWebSocket from './websocket';
import { MatDialog } from '@angular/material/dialog';
import { JoinGameComponent } from './join-game/join-game.component';
import { GameEventType, SwitchUIEventType } from './game-state/game.types';
import Game from './game-state/game';
import { animate, style, transition, trigger } from '@angular/animations';


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

  joined = localStorage.getItem('joined');

  join() {
    const dialogRef = this.dialog.open(JoinGameComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(() => this.joined = localStorage.getItem('joined'));
  }
  kill() { }

  ngOnInit() {
    if (!this.joined) {
      localStorage.setItem('joined', 'true');
      this.joined = localStorage.getItem(this.joined);
    }
    initWebSocket();
    Game.SwitchUIEvent.subscribe(event => {
      console.log(event);
      this.appState = event
    })
    Game.NotificationEvent.subscribe(console.log);
  }
}

