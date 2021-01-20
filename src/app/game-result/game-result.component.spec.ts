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
        fixture.detectChanges();
        fixture.destroy();

    });



});
