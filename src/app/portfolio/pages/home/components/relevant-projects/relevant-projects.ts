import { Component, inject } from '@angular/core';

import { HomeData } from '../../services/home-data';
import { AtroposComponent } from '@shared/components/atropos/atropos';
import { ProjectCard } from '@shared/components/project-card/project-card';

@Component({
  selector: 'app-relevant-projects',
  imports: [AtroposComponent, ProjectCard],
  templateUrl: './relevant-projects.html',
  styleUrl: './relevant-projects.css',
})
export class RelevantProjects {
  private readonly _homeData = inject(HomeData);

  public get homeQuery() {
    return this._homeData.homeData;
  }
}
