import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../home/pages/home-page/home-page.component').then(m => m.HomePageComponent),
        title: 'Ticket Perú'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
