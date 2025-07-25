import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {
  provideTanStackQuery,
  QueryClient,
  withDevtools,
} from '@tanstack/angular-query-experimental';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { provideMarkdown } from 'ngx-markdown';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
    provideHttpClient(withFetch()),
    provideTanStackQuery(new QueryClient(), withDevtools()),
    provideAnimationsAsync(),
    provideMarkdown(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
};
