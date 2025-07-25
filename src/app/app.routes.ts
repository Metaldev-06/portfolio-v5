import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./portfolio/portfolio.routes').then((m) => m.portfolioRoutes),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
