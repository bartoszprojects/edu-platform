import { TestBed } from '@angular/core/testing';

import { TypescriotService } from './typescript.service';

describe('TypescriotService', () => {
  let service: TypescriotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypescriotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
