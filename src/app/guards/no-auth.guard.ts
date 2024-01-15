import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { ApiService } from '../services/api.service';
export const noAuthGuard: CanActivateFn = (route, state) => {
  const auth = inject(ApiService);
  if (!auth.isAuthenticated()) {
    return true;
  }
  auth.goPage('welcome');
  return false;
};
