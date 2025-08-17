import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { lastValueFrom, Observable } from 'rxjs';

import { injectQuery } from '@tanstack/angular-query-experimental';

import { environment } from 'environments/environment';
import { SkillsDataResponse } from '../interfaces/skills-data-response';

@Injectable({
  providedIn: 'root',
})
export class SkillsData {
  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = environment.apiUrl;
  private _locale = signal<string>('es-AR');

  public skillsData = injectQuery(() => ({
    queryKey: ['skillsData', this._locale()],
    queryFn: () => lastValueFrom(this.getSkillsData()),
  }));

  private getSkillsData(): Observable<SkillsDataResponse> {
    let params = new HttpParams()
      .set('populate', 'image')
      .set('locale', this._locale())
      .set('pagination[limit]', 'withCount');

    return this._http.get<SkillsDataResponse>(`${this._baseUrl}/skills`, {
      params,
    });
  }
}
