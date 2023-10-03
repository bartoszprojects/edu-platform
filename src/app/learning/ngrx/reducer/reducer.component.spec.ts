import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReducerComponent } from './reducer.component';

describe('ReducerComponent', () => {
  let component: ReducerComponent;
  let fixture: ComponentFixture<ReducerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReducerComponent]
    });
    fixture = TestBed.createComponent(ReducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
