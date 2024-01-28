import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorsFunctionsComponent } from './generators-functions.component';

describe('GeneratorsFunctionsComponent', () => {
  let component: GeneratorsFunctionsComponent;
  let fixture: ComponentFixture<GeneratorsFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratorsFunctionsComponent]
    });
    fixture = TestBed.createComponent(GeneratorsFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
