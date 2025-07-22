import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        // loadComponent: () => import('').then(m => m.),
        // pathMatch:'full',
        title: 'Checkout | Ticket Perú'
    },
    {
        path: '**',
        // redirectTo: ''
        loadComponent: () => import('../../shared/pages/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent),
    }
];
