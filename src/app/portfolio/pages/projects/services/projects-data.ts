import { effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { lastValueFrom, Observable } from 'rxjs';
import { injectQuery } from '@tanstack/angular-query-experimental';

import { ProjectsDataResponse } from '../interfaces/projects-data-response';
import { environment } from 'environments/environment';
import { LocaleAplication } from '@core/services/locale';

@Injectable({
  providedIn: 'root',
})
export class ProjectsData {
  private readonly _http = inject(HttpClient);
  private readonly _locale = inject(LocaleAplication);

  private readonly _baseUrl = environment.apiUrl;

  public fetch = signal<boolean>(false);

  public projectsData = injectQuery(() => ({
    queryKey: ['projectsData', this._locale.locale()],
    queryFn: () => lastValueFrom(this.getProjectsData(this._locale.locale())),
    enabled: this.fetch(),
    staleTime: Infinity,
    cacheTime: Infinity,
  }));

  public prefetchProjects(value: boolean) {
    this.fetch.set(value);
  }

  private _refetchEffect = effect(() => {
    if (this.fetch()) {
      this.projectsData.refetch();
    }
  });

  private getProjectsData(locale: string): Observable<ProjectsDataResponse> {
    let params = new HttpParams().set('locale', locale);

    return this._http.get<ProjectsDataResponse>(
      `${this._baseUrl}/projects?fields[0]=title&fields[1]=description&fields[2]=stack&fields[3]=project_link&fields[4]=github_link&fields[5]=locale&populate[images][fields][0]=width&populate[images][fields][1]=height&populate[images][fields][2]=url&populate[images][fields][3]=formats`,
      {
        params,
      },
    );
  }
}
