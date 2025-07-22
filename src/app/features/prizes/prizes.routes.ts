import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/prizes-page/prizes-page.component').then(m => m.PrizesPageComponent),
        title: 'Premios | Ticket Perú'
    },
    {
        path: '**',
        // redirectTo: ''
        loadComponent: () => import('../../shared/pages/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent),
    }
];
