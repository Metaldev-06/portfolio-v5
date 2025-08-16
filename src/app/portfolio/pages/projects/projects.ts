import { Component, inject } from '@angular/core';
import { ProjectsData } from './services/projects-data';

import { AtroposComponent } from '@shared/components/atropos/atropos';
import { ProjectCard } from '@shared/components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [AtroposComponent, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export default class Projects {
  private readonly _projectsData = inject(ProjectsData);

  public get projectsQuery() {
    return this._projectsData.projectsData;
  }
}
