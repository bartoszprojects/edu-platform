import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatmapInteractive1Component } from './concatmap-interactive1.component';

describe('ConcatmapInteractive1Component', () => {
  let component: ConcatmapInteractive1Component;
  let fixture: ComponentFixture<ConcatmapInteractive1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcatmapInteractive1Component]
    });
    fixture = TestBed.createComponent(ConcatmapInteractive1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
