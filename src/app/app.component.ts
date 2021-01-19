import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import initWebSocket from './websocket';
import { MatDialog } from '@angular/material/dialog';
import { JoinGameComponent } from './join-game/join-game.component';
import { GameEventType, NotificationEventType, SwitchUIEventType } from './game-state/game.types';
import Game from './game-state/game';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }
  appState: SwitchUIEventType;
  joined = JSON.parse(localStorage.getItem('joined'));
  newPlayers = [];
  join() {
    const dialogRef = this.dialog.open(JoinGameComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(() => this.joined = JSON.parse(localStorage.getItem('joined')));
  }

  getNotificationMsg(evt: NotificationEventType) {
    if (evt.type === "Player Joined") {
      return {
        msg: `New players have joined the game`,
        action: `:D`
      }
    } else if (evt.type === "Player Left") {
      return {
        msg: `A player left the game`,
        action: `:(`,
      }
    } else {
      return {
        msg: `A new player has registered`,
        action: `:)`,
      }
    }
  }

  ngOnInit() {
    if (!this.joined) {
      localStorage.setItem('joined', 'false');
      this.joined = JSON.parse(localStorage.getItem(this.joined));
    }
    initWebSocket();
    Game.SwitchUIEvent.subscribe(event => {
      if (event.type === "Game Completed") this.newPlayers = [];
      this.appState = event
    })
    Game.NotificationEvent.subscribe((res) => {
      if (res.type === "Player Joined") this.newPlayers = res.data.map(player => player.name);
      const { msg, action } = this.getNotificationMsg(res);
      this.snackBar.open(msg, action, {
        duration: 2000
      });
    });
  }
}

