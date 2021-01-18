import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-count-down-started',
  templateUrl: './game-count-down-started.component.html',
  styleUrls: ['./game-count-down-started.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0, transform: 'scale(0.75)' }),
        animate(150, style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class GameCountDownStartedComponent implements OnInit {
  @Input() count: number;
  constructor() { }

  ngOnInit() {
  }

}
