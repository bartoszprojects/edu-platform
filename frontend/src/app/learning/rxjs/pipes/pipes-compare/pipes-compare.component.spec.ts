import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesCompareComponent } from './pipes-compare.component';

describe('PipesCompareComponent', () => {
  let component: PipesCompareComponent;
  let fixture: ComponentFixture<PipesCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesCompareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipesCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
