import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherOrderFunctionsComponent } from './higher-order-functions.component';

describe('HigherOrderFunctionsComponent', () => {
  let component: HigherOrderFunctionsComponent;
  let fixture: ComponentFixture<HigherOrderFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HigherOrderFunctionsComponent]
    });
    fixture = TestBed.createComponent(HigherOrderFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
