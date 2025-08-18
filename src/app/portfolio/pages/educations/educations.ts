import { Component, inject, OnInit } from '@angular/core';
import { EducationsData } from './services/educations-data';
import { Title } from '@angular/platform-browser';

import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-educations',
  imports: [TranslocoPipe],
  templateUrl: './educations.html',
  styleUrl: './educations.css',
})
export default class Educations implements OnInit {
  private readonly _educationsData = inject(EducationsData);
  private readonly title = inject(Title);
  private readonly translocoService = inject(TranslocoService);

  get educationsData() {
    return this._educationsData.educationsData;
  }

  ngOnInit() {
    this._educationsData.prefetchEducations(true);

    this.translocoService
      .selectTranslate('seo.title.education')
      .subscribe((title) => {
        this.title.setTitle(title);
      });
  }
}
