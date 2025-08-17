import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
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

  public educationsData = injectQuery(() => ({
    queryKey: ['educationsData', this._locale()],
    queryFn: () => lastValueFrom(this.getEducationsData()),
  }));

  private getEducationsData(): Observable<EducationsDataResponse> {
    let params = new HttpParams()
      .set('populate', 'image')
      .set('locale', this._locale())
      .set('pagination[limit]', 'withCount');

    return this._http.get<EducationsDataResponse>(
      `${this._baseUrl}/educations`,
      {
        params,
      },
    );
  }
}
