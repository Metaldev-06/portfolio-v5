import { TestBed } from '@angular/core/testing';

import { SkillsData } from './skills-data';

describe('SkillsData', () => {
  let service: SkillsData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
