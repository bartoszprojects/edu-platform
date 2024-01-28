import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinelatestComponent } from './combinelatest.component';

describe('CombinelatestComponent', () => {
  let component: CombinelatestComponent;
  let fixture: ComponentFixture<CombinelatestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombinelatestComponent]
    });
    fixture = TestBed.createComponent(CombinelatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
