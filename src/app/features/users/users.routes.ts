import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/my-account-page/my-account-page.component').then(m => m.MyAccountPageComponent),        
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/user-profile-page/user-profile-page.component').then(m => m.UserProfilePageComponent),
                title: 'Mi Cuenta | Ticket Perú',
                pathMatch: 'full'
            },
            {
                path: 'historial',
                loadComponent: () => import('./pages/history-page/history-page.component').then(m => m.HistoryPageComponent),
                title: 'Mi Historial | Ticket Perú',
            },
            {
                path: 'ajustes',
                loadComponent: () => import('./pages/user-settings-page/user-settings-page.component').then(m => m.UserSettingsPageComponent),
                title: 'Ajustes | Ticket Perú',
            },
            {
                path: 'seguridad',
                loadComponent: () => import('./pages/user-security-page/user-security-page.component').then(m => m.UserSecurityPageComponent),
                title: 'Seguridad | Ticket Perú',
            },
            {
                path: '**',
                // redirectTo: ''
                loadComponent: () => import('../../shared/pages/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent),
            }
        ]
    },    
    {
        path: '**',
        // redirectTo: ''
        loadComponent: () => import('../../shared/pages/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent),
    }
];
