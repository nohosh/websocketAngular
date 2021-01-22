import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { MatBadgeModule, MatDialogModule, MatIconModule, MatSnackBarModule, MatTableModule, MatTooltip, MatTooltipModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { GameCountDownStartedComponent } from './game-count-down-started/game-count-down-started.component';
import { GameCountDownComponent } from './game-count-down/game-count-down.component';
import { GameResultComponent } from './game-result/game-result.component';
import { GameStartedComponent } from './game-started/game-started.component';
import { GameWaitingComponent } from './game-waiting/game-waiting.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatTooltipModule,
        MatTableModule,
        MatBadgeModule,
        MatIconModule,
        HttpClientModule,
        MatSnackBarModule
      ],
      declarations: [
        AppComponent,
        GameWaitingComponent,
        GameCountDownComponent,
        GameCountDownStartedComponent,
        GameStartedComponent,
        GameWaitingComponent,
        LeaderboardComponent,
        GameResultComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should have as Heading 'Funny Game'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const dom = fixture.debugElement.nativeElement;
    expect(dom.querySelector('a').textContent).toContain('Funny Game');
  });
});
