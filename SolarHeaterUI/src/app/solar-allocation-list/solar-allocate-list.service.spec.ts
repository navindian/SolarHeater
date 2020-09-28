import { TestBed } from '@angular/core/testing';

import { SolarAllocateListService } from './solar-allocate-list.service';

describe('SolarAllocateListService', () => {
  let service: SolarAllocateListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolarAllocateListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
