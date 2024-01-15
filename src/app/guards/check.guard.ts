import { CanActivateFn } from '@angular/router';

export const checkGuard: CanActivateFn = (route, state) => {
  return true;
};
