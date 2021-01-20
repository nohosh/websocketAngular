import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GameCountDownStartedComponent } from './game-count-down-started.component';

describe('GameCountDownStartedComponent', () => {
    let component: GameCountDownStartedComponent;
    let fixture: ComponentFixture<GameCountDownStartedComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GameCountDownStartedComponent],
            imports: [BrowserAnimationsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GameCountDownStartedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
