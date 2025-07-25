import { Routes } from '@angular/router';

import { Portfolio } from './portfolio';

export const portfolioRoutes: Routes = [
  {
    path: '',
    component: Portfolio,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home'),
      },
      {
        path: 'projects',
        loadComponent: () => import('./pages/projects/projects'),
      },
      {
        path: 'skills',
        loadComponent: () => import('./pages/skills/skills'),
      },
      {
        path: 'educations',
        loadComponent: () => import('./pages/educations/educations'),
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
