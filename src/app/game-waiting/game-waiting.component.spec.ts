import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { GameWaitingComponent } from './game-waiting.component';

describe('GameWaitingComponent', () => {
  let component: GameWaitingComponent;
  let fixture: ComponentFixture<GameWaitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameWaitingComponent],
      imports: [NoopAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
