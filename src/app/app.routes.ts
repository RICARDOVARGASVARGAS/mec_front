import { Routes } from '@angular/router';
import { noAuthGuard } from './guards/no-auth.guard';
import { authGuard } from './guards/auth.guard';
import { WelcomeComponent } from './auth/welcome/welcome.component';
import { NotFoundComponent } from './auth/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [noAuthGuard],
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [authGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
