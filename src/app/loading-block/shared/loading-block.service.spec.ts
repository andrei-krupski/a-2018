import { TestBed, inject } from '@angular/core/testing';

import { LoadingBlockService } from './loading-block.service';

describe('LoadingBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingBlockService]
    });
  });

  it('should be created', inject([LoadingBlockService], (service: LoadingBlockService) => {
    expect(service).toBeTruthy();
  }));
});
