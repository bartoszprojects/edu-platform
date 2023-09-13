import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurryingFunctionsComponent } from './currying-functions.component';

describe('CurryingFunctionsComponent', () => {
  let component: CurryingFunctionsComponent;
  let fixture: ComponentFixture<CurryingFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurryingFunctionsComponent]
    });
    fixture = TestBed.createComponent(CurryingFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
