import { TestBed, inject } from '@angular/core/testing';

import { JudgeService } from './judge.service';

describe('JudgeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JudgeService]
    });
  });

  it('should ...', inject([JudgeService], (service: JudgeService) => {
    expect(service).toBeTruthy();
  }));
});
