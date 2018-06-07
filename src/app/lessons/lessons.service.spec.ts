import { TestBed, inject } from '@angular/core/testing';

import { LessonsService } from '../lessons/lessons.service';

describe('LessonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LessonsService]
    });
  });

  it('should be created', inject([LessonsService], (service: LessonsService) => {
    expect(service).toBeTruthy();
  }));
});
