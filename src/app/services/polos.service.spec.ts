import { TestBed } from '@angular/core/testing';

import { polosService } from './polos.service';

describe('polosService', () => {
  let service: polosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(polosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
