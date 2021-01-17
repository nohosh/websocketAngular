import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-count-down',
  templateUrl: './game-count-down.component.html',
  styleUrls: ['./game-count-down.component.scss']
})
export class GameCountDownComponent implements OnInit {
  @Input() count: number;
  constructor() { }

  ngOnInit() {

  }

}
