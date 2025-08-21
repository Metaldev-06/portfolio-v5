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
        data: { seoKey: 'seo.home' },
      },
      {
        path: 'projects',
        loadComponent: () => import('./pages/projects/projects'),
        data: { seoKey: 'seo.projects' },
      },
      {
        path: 'skills',
        loadComponent: () => import('./pages/skills/skills'),
        data: { seoKey: 'seo.skills' },
      },
      {
        path: 'educations',
        loadComponent: () => import('./pages/educations/educations'),
        data: { seoKey: 'seo.education' },
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact'),
        data: { seoKey: 'seo.contact' },
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
