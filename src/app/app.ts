import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';

import { TranslocoService } from '@jsverse/transloco';
import { filter, map, mergeMap, of, switchMap } from 'rxjs';

interface SeoTranslation {
  title?: string;
  description?: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _titleService = inject(Title);
  private readonly _metaService = inject(Meta);
  private readonly _transloco = inject(TranslocoService);

  constructor() {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this._activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap((route) => route.data),
        switchMap((data) => {
          if (data['seoKey']) {
            return this._transloco
              .selectTranslateObject<Record<string, any>>(data['seoKey'])
              .pipe(map((obj) => obj as SeoTranslation));
          }
          return of(null);
        }),
      )
      .subscribe((translation: SeoTranslation | null) => {
        if (!translation) return;

        if (translation.title) {
          this._titleService.setTitle(translation.title);
          this._metaService.updateTag({
            property: 'og:title',
            content: translation.title,
          });
          this._metaService.updateTag({
            name: 'twitter:title',
            content: translation.title,
          });
        }

        if (translation.description) {
          this._metaService.updateTag({
            name: 'description',
            content: translation.description,
          });
          this._metaService.updateTag({
            property: 'og:description',
            content: translation.description,
          });
          this._metaService.updateTag({
            name: 'twitter:description',
            content: translation.description,
          });
        }
      });

    // 🔹 Reaccionar cuando cambia el idioma manualmente
    this._transloco.langChanges$.subscribe(() => {
      // Simulamos un reload de la ruta actual para actualizar las metas
      this._router.navigateByUrl(this._router.url);
    });
  }
}
