import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Shopping } from '../../state/reducers/index';
import { selectLoginInformation } from '../../state/selectors/shopping-selectors';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private userAuth: AuthService,
    private router: Router,
    private store: Store<Shopping>
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> {
    return this.store.select(selectLoginInformation).pipe(
      map((login) => {
       return login ? true : this.router.parseUrl("/home-page") }  )
    );
  }
}
