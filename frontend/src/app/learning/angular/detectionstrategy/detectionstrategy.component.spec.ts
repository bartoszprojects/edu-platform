import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionstrategyComponent } from './detectionstrategy.component';

describe('DetectionstrategyComponent', () => {
  let component: DetectionstrategyComponent;
  let fixture: ComponentFixture<DetectionstrategyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetectionstrategyComponent]
    });
    fixture = TestBed.createComponent(DetectionstrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
