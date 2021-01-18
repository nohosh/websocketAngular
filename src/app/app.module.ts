import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';//nativly supports: chrome, opera, firefox. Polyfill for others.
import { MatButtonModule, MatCardModule, MatListModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JoinGameComponent } from './join-game/join-game.component';
import { GameCountDownComponent } from './game-count-down/game-count-down.component';
import { GameResultComponent } from './game-result/game-result.component';
import { GameWaitingComponent } from './game-waiting/game-waiting.component';
import { GameStartedComponent } from './game-started/game-started.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,

    JoinGameComponent,

    GameCountDownComponent,

    GameResultComponent,

    GameWaitingComponent,

    GameStartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  entryComponents: [AppComponent, JoinGameComponent],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [MatCardModule]
})
export class AppModule { }
