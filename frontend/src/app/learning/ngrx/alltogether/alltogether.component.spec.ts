import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltogetherComponent } from './alltogether.component';

describe('AlltogetherComponent', () => {
  let component: AlltogetherComponent;
  let fixture: ComponentFixture<AlltogetherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlltogetherComponent]
    });
    fixture = TestBed.createComponent(AlltogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
