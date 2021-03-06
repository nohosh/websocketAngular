import { animate, style, transition, trigger } from '@angular/animations';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-count-down',
  templateUrl: './game-count-down.component.html',
  styleUrls: ['./game-count-down.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0, transform: 'scale(0.75)' }),
        animate(150, style({ opacity: 1, transform: 'scale(1)' }))
      ])

    ])
  ]
})
export class GameCountDownComponent implements OnInit {
  @Input() count: number;
  constructor() { }

  ngOnInit() {

  }

}
