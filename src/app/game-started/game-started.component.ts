import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-started',
  templateUrl: './game-started.component.html',
  styleUrls: ['./game-started.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0, transform: 'scale(0.75)' }),
        animate(150, style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition('* => void', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate(150, style({ opacity: 0, transform: 'scale(0.75)' }))
      ])
    ])
  ]
})
export class GameStartedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
