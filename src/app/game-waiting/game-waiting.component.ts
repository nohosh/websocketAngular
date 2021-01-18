import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-waiting',
  templateUrl: './game-waiting.component.html',
  styleUrls: ['./game-waiting.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0, transform: 'scale(0.75)' }),
        animate(150, style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class GameWaitingComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
