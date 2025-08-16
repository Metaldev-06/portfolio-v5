import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  public projectsData = injectQuery(() => ({
    queryKey: ['projectsData', this._locale()],
    queryFn: () => lastValueFrom(this.getProjectsData()),
  }));

  private getProjectsData(): Observable<ProjectsDataResponse> {
    return this._http.get<ProjectsDataResponse>(
      `${this._baseUrl}/projects?populate=images&locale=es-AR`,
    );
  }
}
