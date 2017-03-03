/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DoctitleService } from './doctitle.service';

describe('DoctitleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctitleService]
    });
  });

  it('should ...', inject([DoctitleService], (service: DoctitleService) => {
    expect(service).toBeTruthy();
  }));
});
