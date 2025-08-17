import { Component, inject, OnInit } from '@angular/core';
import { SkillsData } from './services/skills-data';
import { SkillData, Type } from './interfaces/skills-data-response';

import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-skills',
  imports: [TranslocoPipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export default class Skills implements OnInit {
  private readonly _skillsData = inject(SkillsData);

  get skillsData() {
    return this._skillsData.skillsData;
  }

  ngOnInit(): void {
    this._skillsData.prefetchSkills(true);
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
