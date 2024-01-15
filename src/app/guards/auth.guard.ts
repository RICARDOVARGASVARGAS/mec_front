import { CanActivateFn } from '@angular/router';
import { ApiService } from '../services/api.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(ApiService);
  if (auth.isAuthenticated()) {
    return true;
  }
  auth.toast('warning', 'Debe de Iniciar Sesión');
  auth.goPage('auth/login');
  return false;
};
