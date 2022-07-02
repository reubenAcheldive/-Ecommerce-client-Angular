import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as UserAction from '../../../src/app/state/actions/user.actions';
import { logOut } from '../../../src/app/state/actions/shopping.actions';
import { selectCartList } from '../state/selectors/shopping-selectors';
import { Subject, takeUntil } from 'rxjs';
import { selectAuthDetails } from './../state/selectors/auth-selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private unsubscribe$ = new Subject<void>();
  haveListCart$: any;
  // checkListCart() {
  //   this.store
  //     .select(selectAllCartList)
  //     .pipe(takeUntil(this.unsubscribe$))
  //     .subscribe((cartProducts) =>
  //       cartProducts.length > 0
  //         ? (this.haveListCart$ = true)
  //         : (this.haveListCart$ = false)
  //     );
  // }
  constructor(private store: Store, private router: Router) {}

  AutoCheckJwt() {
    // for now need to remove

    const jwt = localStorage.getItem('jwt');
    if (!jwt) return;
    this.store.dispatch(UserAction.loginByJwt({ jwt }));
    this.store.select(selectAuthDetails).subscribe((loginInformation) => {
      if (loginInformation) {
        if (loginInformation.isAdmin) {
          this.router.navigateByUrl('/dashboard/store');
        }
      }
    });
  }
  logOut() {
    this.router.navigateByUrl('/home-page');
    this.store.dispatch(logOut());
    localStorage.removeItem('jwt');
  }
}
