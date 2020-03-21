import { TestBed } from '@angular/core/testing';

import { KitsService } from './kits.service';

describe('KitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KitsService = TestBed.get(KitsService);
    expect(service).toBeTruthy();
  });
});
