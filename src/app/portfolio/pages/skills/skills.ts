import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

import { SkillsData } from './services/skills-data';
import { SkillData, Type } from './interfaces/skills-data-response';

@Component({
  selector: 'app-skills',
  imports: [TranslocoPipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export default class Skills implements OnInit {
  private readonly _skillsData = inject(SkillsData);
  private readonly title = inject(Title);
  private readonly translocoService = inject(TranslocoService);

  get skillsData() {
    return this._skillsData.skillsData;
  }

  ngOnInit(): void {
    this._skillsData.prefetchSkills(true);

    this.translocoService
      .selectTranslate('seo.title.skills')
      .subscribe((title) => {
        this.title.setTitle(title);
      });
  }

  public groupByType(data: SkillData[] | null | undefined) {
    if (!data) return [];

    // devuelve un array [{ type, items }]
    const grouped = Object.values(
      data.reduce(
        (acc, skill) => {
          if (!acc[skill.type]) {
            acc[skill.type] = { type: skill.type, items: [] as SkillData[] };
          }
          acc[skill.type].items.push(skill);
          return acc;
        },
        {} as Record<Type, { type: Type; items: SkillData[] }>,
      ),
    );

    return grouped;
  }
}
