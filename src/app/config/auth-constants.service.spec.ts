import { TestBed } from '@angular/core/testing';

import { AuthConstantsService } from './auth-constants.service';

describe('AuthConstantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthConstantsService = TestBed.get(AuthConstantsService);
    expect(service).toBeTruthy();
  });
});
