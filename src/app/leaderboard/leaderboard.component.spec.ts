// import { DebugElement } from '@angular/core';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatBadgeModule, MatIconModule, MatTableModule, MatTooltipModule } from '@angular/material';
// import { By } from '@angular/platform-browser';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// import { LeaderboardComponent } from './leaderboard.component';

// describe('LeaderboardComponent', () => {
//     let component: LeaderboardComponent;
//     let fixture: ComponentFixture<LeaderboardComponent>;
//     let de: DebugElement;

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [LeaderboardComponent],
//             imports: [
//                 NoopAnimationsModule,
//                 MatTableModule,
//                 MatTooltipModule,
//                 MatBadgeModule,
//                 MatIconModule
//             ]
//         })
//             .compileComponents();
//     }));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(LeaderboardComponent);
//         de = fixture.debugElement;
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//     });

//     it('should create', () => {
//         expect(component).toBeTruthy();
//     });
//     it('shoud have correct rows', () => {
//         fixture.detectChanges();
//         const rowDebugElements = de.queryAll(By.css('tbody tr'));
//         expect(rowDebugElements.length).toBe(0);
//         const rowHtmlElements = de.nativeElement.querySelectorAll('tbody tr');
//         expect(rowHtmlElements.length).toBe(5);
//     })


// });
