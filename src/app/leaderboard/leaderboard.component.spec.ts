import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBadgeModule, MatIconModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { LeaderboardComponent } from './leaderboard.component';

describe('LeaderboardComponent', () => {
    let component: LeaderboardComponent;
    let fixture: ComponentFixture<LeaderboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LeaderboardComponent],
            imports: [
                NoopAnimationsModule,
                MatTableModule,
                MatTooltipModule,
                MatBadgeModule,
                MatIconModule,

            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LeaderboardComponent);

        component = fixture.componentInstance;
        component.data = [{
            leader_board: [{
                name: "name",
                upper: 4,
                lower: 3,
                score: 21,
                winner: true
            }],
            round: 3
        }];
        fixture.detectChanges();

    });
    it('should create Leaderboard Table', async () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component).toBeTruthy();
        });
    });


});
