import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'iniciar-sesion',
        loadComponent: () => import('./pages/login-page/login-page.component').then(m => m.LoginPageComponent),
        title: 'Iniciar Sesión | Ticket Perú',
    },
    {
        path: 'registro',
        loadComponent: () => import('./pages/sing-up-page/sing-up-page.component').then(m => m.SingUpPageComponent),
        title: 'Registro | Ticket Perú',
    },
    {
        path: 'admin-login',
        loadComponent: () => import('./pages/admin-login-page/admin-login-page.component').then(m => m.AdminLoginPageComponent),
        title: 'Admin - Iniciar Sesión | Ticket Perú',        
    },
    {
        path: '**',
        redirectTo: 'iniciar-sesion'
    }
];
