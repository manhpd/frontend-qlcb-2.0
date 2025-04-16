import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    data: { breadcrumb: 'Login' }
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent),
    data: { breadcrumb: 'Register' }
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
    data: { breadcrumb: 'Home' },
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        data: { breadcrumb: 'Dashboard' }
      },
      {
        path: 'profile',
        loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent),
        data: { breadcrumb: 'Profile' }
      },
      {
        path: 'officer',
        loadChildren: () => import('./officer/officer.module').then(m => m.OfficerModule),
        data: { breadcrumb: 'Officers' }
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
