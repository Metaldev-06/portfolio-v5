import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevantProjects } from './relevant-projects';

describe('RelevantProjects', () => {
  let component: RelevantProjects;
  let fixture: ComponentFixture<RelevantProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelevantProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelevantProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
