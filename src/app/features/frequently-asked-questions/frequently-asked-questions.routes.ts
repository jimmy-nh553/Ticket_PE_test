import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/frequently-asked-questions-page/frequently-asked-questions-page.component').then(m => m.FrequentlyAskedQuestionsPageComponent),
        title: 'Preguntas Frecuentes | Ticket Perú'
    },
    {
        path: '**',
        // redirectTo: ''
        loadComponent: () => import('../../shared/pages/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent),
    }
];
