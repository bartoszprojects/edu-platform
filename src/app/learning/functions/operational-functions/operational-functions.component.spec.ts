import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalFunctionsComponent } from './operational-functions.component';

describe('OperationalFunctionsComponent', () => {
  let component: OperationalFunctionsComponent;
  let fixture: ComponentFixture<OperationalFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperationalFunctionsComponent]
    });
    fixture = TestBed.createComponent(OperationalFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
