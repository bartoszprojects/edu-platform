import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionsFunctionsComponent } from './compositions-functions.component';

describe('CompositionsFunctionsComponent', () => {
  let component: CompositionsFunctionsComponent;
  let fixture: ComponentFixture<CompositionsFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompositionsFunctionsComponent]
    });
    fixture = TestBed.createComponent(CompositionsFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
