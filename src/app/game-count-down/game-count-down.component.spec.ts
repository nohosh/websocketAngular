import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { GameCountDownComponent } from './game-count-down.component';

describe('GameCountDownComponent', () => {
  let component: GameCountDownComponent;
  let fixture: ComponentFixture<GameCountDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameCountDownComponent],
      imports: [NoopAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCountDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
