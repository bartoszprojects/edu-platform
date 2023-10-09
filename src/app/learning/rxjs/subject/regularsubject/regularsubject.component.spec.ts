import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularsubjectComponent } from './regularsubject.component';

describe('RegularsubjectComponent', () => {
  let component: RegularsubjectComponent;
  let fixture: ComponentFixture<RegularsubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegularsubjectComponent]
    });
    fixture = TestBed.createComponent(RegularsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
