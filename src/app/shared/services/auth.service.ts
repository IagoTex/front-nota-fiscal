import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import {AuthService} from "./security/auth.service";
import {map, Observable, take} from "rxjs";


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): Observable<boolean>{
    return this.authService.isAuthenticated().pipe(
      take(1),
      map(isAuth => {
        if(!isAuth){
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    )
  }

}
