import { HttpClient, HttpParams } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';

import { lastValueFrom, Observable } from 'rxjs';

import { injectQuery } from '@tanstack/angular-query-experimental';

import { environment } from 'environments/environment';
import { SkillsDataResponse } from '../interfaces/skills-data-response';
import { LocaleAplication } from '@core/services/locale';

@Injectable({
  providedIn: 'root',
})
export class SkillsData {
  private readonly _http = inject(HttpClient);

  private readonly _baseUrl = environment.apiUrl;

  public fetch = signal<boolean>(false);

  public skillsData = injectQuery(() => ({
    queryKey: ['skillsData'],
    queryFn: () => lastValueFrom(this.getSkillsData()),
    enabled: this.fetch(),
  }));

  public prefetchSkills(value: boolean) {
    this.fetch.set(value);
  }

  private _refetchEffect = effect(() => {
    if (this.fetch()) {
      this.skillsData.refetch();
    }
  });

  private getSkillsData(): Observable<SkillsDataResponse> {
    let params = new HttpParams().set('pagination[limit]', 'withCount');

    return this._http.get<SkillsDataResponse>(
      `${this._baseUrl}/skills?fields[0]=title&fields[1]=type&populate[image][fields][0]=name&populate[image][fields][1]=url`,
      {
        params,
      },
    );
  }
}
