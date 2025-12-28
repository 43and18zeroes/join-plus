import { Routes } from '@angular/router';

const pageTitle = ' Join Plus'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Login' + pageTitle,
    loadComponent: () => import('./auth/pages/start/start').then((m) => m.Start),
  },
];
