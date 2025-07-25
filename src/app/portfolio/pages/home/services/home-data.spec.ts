import { TestBed } from '@angular/core/testing';

import { HomeData } from './home-data';

describe('HomeData', () => {
  let service: HomeData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
