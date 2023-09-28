import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithlatestfromComponent } from './withlatestfrom.component';

describe('WithlatestfromComponent', () => {
  let component: WithlatestfromComponent;
  let fixture: ComponentFixture<WithlatestfromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithlatestfromComponent]
    });
    fixture = TestBed.createComponent(WithlatestfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
