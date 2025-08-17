import { HttpClient, HttpParams } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';

import { lastValueFrom, Observable } from 'rxjs';

import { injectQuery } from '@tanstack/angular-query-experimental';

import { environment } from 'environments/environment';
import { HomeDataResponse } from '../interfaces/home-data-response';
import { LocaleAplication } from '@core/services/locale';

@Injectable({
  providedIn: 'root',
})
export class HomeData {
  private readonly _http = inject(HttpClient);
  private readonly _locale = inject(LocaleAplication);

  private readonly _baseUrl = environment.apiUrl;

  public fetch = signal<boolean>(false);

  public homeData = injectQuery(() => ({
    queryKey: ['homeData', this._locale.locale()],
    queryFn: () => lastValueFrom(this.getHomeData(this._locale.locale())),
    enabled: this.fetch(),
    staleTime: Infinity,
    cacheTime: Infinity,
  }));

  public prefetchHome(value: boolean) {
    this.fetch.set(value);
  }

  private _refetchEffect = effect(() => {
    if (this.fetch()) {
      this.homeData.refetch();
    }
  });

  private getHomeData(locale: string): Observable<HomeDataResponse> {
    let params = new HttpParams().set('locale', locale);

    return this._http.get<HomeDataResponse>(
      `${this._baseUrl}/home?populate[image][fields][0]=url&populate[image][fields][1]=name&populate[image][fields][2]=width&populate[image][fields][3]=height&populate[services][fields][0]=title&populate[services][fields][1]=description&populate[services][populate][image][fields][0]=url&populate[services][populate][image][fields][1]=name&populate[projects][fields][0]=title&populate[projects][fields][1]=description&populate[projects][fields][2]=github_link&populate[projects][fields][3]=project_link&populate[projects][fields][4]=stack&populate[projects][populate][images][fields][0]=url&populate[projects][populate][images][fields][1]=name&populate[skills][fields][0]=title&populate[skills][populate][image][fields][0]=url`,
      {
        params,
      },
    );
  }
}
