import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('../../features/auth/pages/admin-login-page/admin-login-page.component').then(m => m.AdminLoginPageComponent),
        title: 'Admin - Iniciar Sesión | Ticket Perú',        
    },   
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard-page/dashboard-page.component').then(m => m.DashboardPageComponent),
        title: 'Dashboard | Ticket Perú',        
    },
    {
        path: 'premios',
        loadComponent: () => import('./pages/admin-prizes-list-page/admin-prizes-list-page.component').then(m => m.AdminPrizesListPageComponent),
        title: 'Listado de premios | Ticket Perú',        
    },
    // {
    //     path: 'premios/crear',
    //     // loadComponent: () => import('').then(m => m.),
    //     title: 'Crear premio | Ticket Perú',        
    // },
    {
        path: 'items',
        loadComponent: () => import('./pages/admin-items-list-page/admin-items-list-page.component').then(m => m.AdminItemsListPageComponent),
        title: 'Listado de productos | Ticket Perú',        
    },
    // {
    //     path: 'productos/crear',
    //     // loadComponent: () => import('').then(m => m.),
    //     title: 'Crear producto | Ticket Perú',        
    // },
    {
        path: '**',
        // redirectTo: 'dashboard'
        loadComponent: () => import('../../shared/pages/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent),
    }
];
