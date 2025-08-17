import { HttpClient, HttpParams } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { environment } from 'environments/environment';
import { lastValueFrom, Observable } from 'rxjs';
import { EducationsDataResponse } from '../interfaces/educations-data-response';

@Injectable({
  providedIn: 'root',
})
export class EducationsData {
  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = environment.apiUrl;
  private _locale = signal<string>('es-AR');
  public fetch = signal<boolean>(false);

  public educationsData = injectQuery(() => ({
    queryKey: ['educationsData', this._locale()],
    queryFn: () => lastValueFrom(this.getEducationsData()),
    enabled: this.fetch(),
  }));

  public prefetchEducations(value: boolean) {
    this.fetch.set(value);
  }

  private _refetchEffect = effect(() => {
    if (this.fetch()) {
      this.educationsData.refetch();
    }
  });

  private getEducationsData(): Observable<EducationsDataResponse> {
    let params = new HttpParams()
      .set('locale', this._locale())
      .set('pagination[limit]', 'withCount');

    return this._http.get<EducationsDataResponse>(
      `${this._baseUrl}/educations?fields[0]=title&fields[1]=institution&fields[2]=locale&populate[image][fields][0]=name&populate[image][fields][1]=width&populate[image][fields][2]=height&populate[image][fields][3]=url&populate[image][fields][4]=formats&`,
      {
        params,
      },
    );
  }
}
