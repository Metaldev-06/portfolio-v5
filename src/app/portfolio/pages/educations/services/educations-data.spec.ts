import { TestBed } from '@angular/core/testing';

import { EducationsData } from './educations-data';

describe('EducationsData', () => {
  let service: EducationsData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationsData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
