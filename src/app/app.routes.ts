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
    path: 'company',
    loadChildren: () =>
      import('./company/company.module').then((m) => m.CompanyModule),
    canActivate: [authGuard],
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate: [authGuard],
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('./setting/setting.module').then((m) => m.SettingModule),
    canActivate: [authGuard],
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
    canActivate: [authGuard],
  },
  {
    path: 'service',
    loadChildren: () =>
      import('./service/service.module').then((m) => m.ServiceModule),
    canActivate: [authGuard],
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
