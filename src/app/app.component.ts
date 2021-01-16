import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }
  title = 'ws-app';
  socket = webSocket(`ws://localhost:8089/subscribe`);

  start() {
    this.socket.subscribe(
      msg => console.log(`receiving...` + msg),
      err => console.log(err),
      () => console.log(`complete`)
    );
  }
  ngOnInit() {
  }
}
