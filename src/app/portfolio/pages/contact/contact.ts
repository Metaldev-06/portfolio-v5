import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-contact',
  imports: [TranslocoPipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export default class Contact implements OnInit {
  private readonly title = inject(Title);
  private readonly translocoService = inject(TranslocoService);

  ngOnInit(): void {
    this.translocoService
      .selectTranslate('seo.title.contact')
      .subscribe((title) => {
        this.title.setTitle(title);
      });
  }
}
