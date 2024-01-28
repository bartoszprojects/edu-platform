import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackFunctionsComponent } from './callback-functions.component';

describe('CallbackFunctionsComponent', () => {
  let component: CallbackFunctionsComponent;
  let fixture: ComponentFixture<CallbackFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallbackFunctionsComponent]
    });
    fixture = TestBed.createComponent(CallbackFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
