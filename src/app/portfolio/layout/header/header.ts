import { Component, effect, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

import { DrawerModule } from 'primeng/drawer';

import { EducationsData } from '@portfolio/pages/educations/services/educations-data';
import { HomeData } from '@portfolio/pages/home/services/home-data';
import { Locale } from '@core/enum/locale';
import { LocaleAplication } from '@core/services/locale';
import { Logo } from './component/logo/logo';
import { ProjectsData } from '@portfolio/pages/projects/services/projects-data';
import { SkillsData } from '@portfolio/pages/skills/services/skills-data';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Logo, TranslocoPipe, DrawerModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly _homeData = inject(HomeData);
  private readonly _projectsData = inject(ProjectsData);
  private readonly _skillsData = inject(SkillsData);
  private readonly _educationsData = inject(EducationsData);
  private readonly _locale = inject(LocaleAplication);
  private readonly _transloco = inject(TranslocoService);

  public readonly locale = this._locale.locale;

  public visible: boolean = false;

  constructor() {
    this.selectLanguage();

    effect(() => {
      if (this.locale()) {
        this.selectLanguage();
      }
    });
  }

  public closeDrawer() {
    this.visible = false;
  }

  public toggleLocale() {
    this._locale.toggleLocale();
  }

  public selectLanguage(language: Locale = this._locale.locale()) {
    if (language === Locale.EN) {
      this._transloco.setActiveLang('en');
    }

    if (language === Locale.ES_AR) {
      this._transloco.setActiveLang('es');
    }
  }

  public localesAssets: Record<
    Locale,
    { src: string; alt: string; title: string }
  > = {
    [Locale.ES_AR]: {
      src: 'image/arg-logo.svg',
      alt: 'Español',
      title: 'Español',
    },
    [Locale.EN]: {
      src: 'image/usa-logo.svg',
      alt: 'English',
      title: 'English',
    },
  };

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
