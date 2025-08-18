import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

import { AtroposComponent } from '@shared/components/atropos/atropos';
import { ProjectCard } from '@shared/components/project-card/project-card';
import { ProjectsData } from './services/projects-data';

@Component({
  selector: 'app-projects',
  imports: [AtroposComponent, ProjectCard, TranslocoPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export default class Projects implements OnInit {
  private readonly _projectsData = inject(ProjectsData);
  private readonly title = inject(Title);
  private readonly translocoService = inject(TranslocoService);

  public get projectsQuery() {
    return this._projectsData.projectsData;
  }

  ngOnInit() {
    this._projectsData.prefetchProjects(true);
    this.translocoService
      .selectTranslate('seo.title.projects')
      .subscribe((title) => {
        this.title.setTitle(title);
      });
  }
}
