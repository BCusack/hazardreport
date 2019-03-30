import { TestBed } from '@angular/core/testing';

import { HazardDataService } from './hazard-data.service';

describe('HazardDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HazardDataService = TestBed.get(HazardDataService);
    expect(service).toBeTruthy();
  });
});
