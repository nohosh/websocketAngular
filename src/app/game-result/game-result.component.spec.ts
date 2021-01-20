import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GameResultComponent } from './game-result.component';

describe('GameResultComponent', () => {
    let component: GameResultComponent;
    let fixture: ComponentFixture<GameResultComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GameResultComponent],
            imports: [BrowserAnimationsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GameResultComponent);
        component = fixture.componentInstance;
        component.winner = {
            name: 'test',
            lower: 2,
            upper: 1,
            score: 21,
            winner: false
        }
        fixture.detectChanges();
    });
    it('should init winner', async () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component).toBeTruthy();
        });
    });


});
