import { CanActivateFn } from '@angular/router';
import { ApiService } from '../services/api.service';
import { inject } from '@angular/core';

export const checkGuard: CanActivateFn = (route, state) => {
  const auth = inject(ApiService);
  const access = route.data['access'] as string[];
  const permissions = auth.user.permissions.map((item: any) => item.name);

  if (access) {
    for (const check of access) {
      if (permissions.includes(check)) {
        return true;
      }
    }
  }
  auth.toast('warning', 'No tiene permisos para esta ruta');
  auth.goPage('welcome');
  return false;
};
