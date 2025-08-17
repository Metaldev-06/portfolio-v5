import { Component, inject, OnInit } from '@angular/core';
import { ProjectsData } from './services/projects-data';

import { TranslocoPipe } from '@jsverse/transloco';

import { AtroposComponent } from '@shared/components/atropos/atropos';
import { ProjectCard } from '@shared/components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [AtroposComponent, ProjectCard, TranslocoPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export default class Projects implements OnInit {
  private readonly _projectsData = inject(ProjectsData);

  public get projectsQuery() {
    return this._projectsData.projectsData;
  }

  ngOnInit() {
    this._projectsData.prefetchProjects(true);
  }
}
