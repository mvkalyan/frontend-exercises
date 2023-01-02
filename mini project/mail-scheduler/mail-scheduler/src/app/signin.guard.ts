import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SigninService } from './signin.service';

@Injectable({
  providedIn: 'root'
})
export class SigninGuard implements CanActivate, CanActivateChild {
  constructor(private signinService:SigninService, private router:Router){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("hello");
    return this.checkLogin(state.url);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      throw new Error('Method not implemented.');
  }
  checkLogin(url: string) {
    console.log(url);
    if (this. signinService.isLoggedIn) 
        return this. signinService.isLoggedIn;
    this. signinService.redirectUrl = url;
    return this.router.parseUrl("");
  }
}
