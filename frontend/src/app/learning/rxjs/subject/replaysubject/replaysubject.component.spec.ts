import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaysubjectComponent } from './replaysubject.component';

describe('ReplaysubjectComponent', () => {
  let component: ReplaysubjectComponent;
  let fixture: ComponentFixture<ReplaysubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReplaysubjectComponent]
    });
    fixture = TestBed.createComponent(ReplaysubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
