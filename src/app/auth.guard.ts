import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(state.url == ""){ return true;}

  let token = sessionStorage.getItem('token');

  if(!token){
    return router.parseUrl('login');
  }
  return true;
};