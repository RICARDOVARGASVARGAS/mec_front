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
    path: 'box',
    loadChildren: () => import('./box/box.module').then((m) => m.BoxModule),
    canActivate: [authGuard],
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule),
    canActivate: [authGuard],
  },
  {
    path: 'car',
    loadChildren: () => import('./car/car.module').then((m) => m.CarModule),
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
