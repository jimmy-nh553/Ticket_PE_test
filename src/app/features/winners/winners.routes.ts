import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/winners-page/winners-page.component').then(m => m.WinnersPageComponent),
        title: 'Ganadores | Ticket Perú'
    },
    {
        path: '**',
        // redirectTo: ''
        loadComponent: () => import('../../shared/pages/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent),
    }
];
