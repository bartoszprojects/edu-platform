import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhaustmapComponent } from './exhaustmap.component';

describe('ExhaustmapComponent', () => {
  let component: ExhaustmapComponent;
  let fixture: ComponentFixture<ExhaustmapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExhaustmapComponent]
    });
    fixture = TestBed.createComponent(ExhaustmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
