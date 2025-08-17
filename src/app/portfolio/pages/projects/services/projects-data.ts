import { effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { lastValueFrom, Observable } from 'rxjs';
import { injectQuery } from '@tanstack/angular-query-experimental';

import { ProjectsDataResponse } from '../interfaces/projects-data-response';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectsData {
  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = environment.apiUrl;
  private _locale = signal<string>('es-AR');
  public fetch = signal<boolean>(false);

  public projectsData = injectQuery(() => ({
    queryKey: ['projectsData', this._locale()],
    queryFn: () => lastValueFrom(this.getProjectsData()),
    enabled: this.fetch(),
  }));

  public prefetchProjects(value: boolean) {
    this.fetch.set(value);
  }

  private _refetchEffect = effect(() => {
    if (this.fetch()) {
      this.projectsData.refetch();
    }
  });

  private getProjectsData(): Observable<ProjectsDataResponse> {
    let params = new HttpParams().set('locale', this._locale());

    return this._http.get<ProjectsDataResponse>(
      `${this._baseUrl}/projects?fields[0]=title&fields[1]=description&fields[2]=stack&fields[3]=project_link&fields[4]=github_link&fields[5]=locale&populate[images][fields][0]=width&populate[images][fields][1]=height&populate[images][fields][2]=url&populate[images][fields][3]=formats`,
      {
        params,
      },
    );
  }
}
