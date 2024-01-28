import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolimorphismFunctionsComponent } from './polimorphism-functions.component';

describe('PolimorphismFunctionsComponent', () => {
  let component: PolimorphismFunctionsComponent;
  let fixture: ComponentFixture<PolimorphismFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolimorphismFunctionsComponent]
    });
    fixture = TestBed.createComponent(PolimorphismFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
