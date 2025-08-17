import { HttpClient, HttpParams } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';

import { lastValueFrom, Observable } from 'rxjs';

import { injectQuery } from '@tanstack/angular-query-experimental';

import { EducationsDataResponse } from '../interfaces/educations-data-response';
import { environment } from 'environments/environment';
import { LocaleAplication } from '@core/services/locale';

@Injectable({
  providedIn: 'root',
})
export class EducationsData {
  private readonly _http = inject(HttpClient);
  private readonly _locale = inject(LocaleAplication);

  private readonly _baseUrl = environment.apiUrl;

  public fetch = signal<boolean>(false);

  public educationsData = injectQuery(() => ({
    queryKey: ['educationsData', this._locale.locale()],
    queryFn: () => lastValueFrom(this.getEducationsData(this._locale.locale())),
    enabled: this.fetch(),
    staleTime: Infinity,
    cacheTime: Infinity,
  }));

  public prefetchEducations(value: boolean) {
    this.fetch.set(value);
  }

  private _refetchEffect = effect(() => {
    if (this.fetch()) {
      this.educationsData.refetch();
    }
  });

  private getEducationsData(
    locale: string,
  ): Observable<EducationsDataResponse> {
    let params = new HttpParams()
      .set('locale', locale)
      .set('pagination[limit]', 'withCount');

    return this._http.get<EducationsDataResponse>(
      `${this._baseUrl}/educations?fields[0]=title&fields[1]=institution&fields[2]=locale&populate[image][fields][0]=name&populate[image][fields][1]=width&populate[image][fields][2]=height&populate[image][fields][3]=url&populate[image][fields][4]=formats&`,
      {
        params,
      },
    );
  }
}
