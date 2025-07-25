import { Component, inject } from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';

import { HomeData } from '../../services/home-data';

@Component({
  selector: 'app-about-me',
  imports: [MarkdownModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  private readonly _homeData = inject(HomeData);

  public get homeQuery() {
    return this._homeData.homeData;
  }
}
