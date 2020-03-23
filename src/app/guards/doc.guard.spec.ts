import { TestBed, async, inject } from '@angular/core/testing';

import { DocGuard } from './doc.guard';

describe('DocGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocGuard]
    });
  });

  it('should ...', inject([DocGuard], (guard: DocGuard) => {
    expect(guard).toBeTruthy();
  }));
});
