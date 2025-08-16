import { TestBed } from '@angular/core/testing';

import { ProjectsData } from './projects-data';

describe('ProjectsData', () => {
  let service: ProjectsData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
