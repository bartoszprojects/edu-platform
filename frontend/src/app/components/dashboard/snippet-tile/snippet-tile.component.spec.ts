import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetTileComponent } from './snippet-tile.component';

describe('SnippetTileComponent', () => {
  let component: SnippetTileComponent;
  let fixture: ComponentFixture<SnippetTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnippetTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnippetTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
