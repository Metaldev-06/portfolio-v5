import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { Logo } from './component/logo/logo';
import { ProjectsData } from '@portfolio/pages/projects/services/projects-data';
import { SkillsData } from '@portfolio/pages/skills/services/skills-data';
import { EducationsData } from '@portfolio/pages/educations/services/educations-data';
import { HomeData } from '@portfolio/pages/home/services/home-data';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Logo],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly _homeData = inject(HomeData);
  private readonly _projectsData = inject(ProjectsData);
  private readonly _skillsData = inject(SkillsData);
  private readonly _educationsData = inject(EducationsData);

  public prefetchHome() {
    this._homeData.prefetchHome(true);
  }

  public prefetchProjects() {
    this._projectsData.prefetchProjects(true);
  }

  public prefetchSkills() {
    this._skillsData.prefetchSkills(true);
  }

  public prefetchEducations() {
    this._educationsData.prefetchEducations(true);
  }
}
