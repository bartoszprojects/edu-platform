import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursionFunctionsComponent } from './recursion-functions.component';

describe('RecursionFunctionsComponent', () => {
  let component: RecursionFunctionsComponent;
  let fixture: ComponentFixture<RecursionFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecursionFunctionsComponent]
    });
    fixture = TestBed.createComponent(RecursionFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
