import { Routes } from '@angular/router';

export const routes: Routes = [   
    {
        path: '',
        loadChildren: () => import('./features/home/home.routes').then(m => m.routes),
        pathMatch: 'full'
    },
    {
        path: 'premios',
        loadChildren: () => import('./features/prizes/prizes.routes').then(m => m.routes),
    },
    {
        path: 'ganadores',
        loadChildren: () => import('./features/winners/winners.routes').then(m => m.routes),
    },
    {
        path: 'preguntas-frecuentes',
        loadChildren: () => import('./features/frequently-asked-questions/frequently-asked-questions.routes').then(m => m.routes),
    },    
    {
        path: 'tickets',
        loadChildren: () => import('./features/tickets/tickets.routes').then(m => m.routes),
    },
    {
        path: 'checkout', //TODO: FALTA COMPONENTE (no redicciona)
        loadChildren: () => import('./features/payment/payment.routes').then(m => m.routes),
    },
    {
        path: 'mi-cuenta',
        loadChildren: () => import('./features/users/users.routes').then(m => m.routes),
    },
    {
        path: 'admin', //TODO: FALTA COMPONENTE (no redicciona)
        loadChildren: () => import('./features/admin/admin.routes').then(m => m.routes),
    },    
    {
        path: 'iniciar-sesion',
        loadComponent: () => import('./features/auth/pages/login-page/login-page.component').then(m => m.LoginPageComponent),
        title: 'Iniciar Sesión | Ticket Perú',
    },
    {
        path: 'registro',
        loadComponent: () => import('./features/auth/pages/sing-up-page/sing-up-page.component').then(m => m.SingUpPageComponent),
        title: 'Registro | Ticket Perú',
    },
    // {
    //     path: 'admin-login',
    //     loadComponent: () => import('./features/auth/pages/admin-login-page/admin-login-page.component').then(m => m.AdminLoginPageComponent),
    //     title: 'Admin - Iniciar Sesión | Ticket Perú',        
    // },    
    {
        path: '**',
        // redirectTo: ''
        loadComponent: () => import('./shared/pages/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent),
    }
];
