import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as UserAction from '../../../src/app/state/actions/user.actions';
import { logOut } from '../../../src/app/state/actions/shopping.actions';
import {
  selectLoginInformation,
  selectCartList,
} from '../state/selectors/shopping-selectors';
import { Subject, takeUntil } from 'rxjs';

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

    this.store.dispatch(
      UserAction.loginByJwt({
        jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvdmVuMTIxQGdtYWlsLmNvbSIsInJvbGVzIjpmYWxzZSwiaWF0IjoxNjU2MjU4Nzg2fQ.5CmWhqoY-PW0TKhJrclzmAN78Mc2hVxO0ydCCXZb2OU',
      })
    );

    // const jwt = localStorage.getItem('jwt');
    // if (!jwt) return;
    // this.store.dispatch(UserAction.loginByJwt({ jwt }));
    // this.store.select(selectLoginInformation).subscribe((loginInformation) => {
    //   if (loginInformation) {
    //     if (loginInformation.isAdmin) {
    //       this.router.navigateByUrl('/store');
    //     }

    //   } else if(this.haveListCart$)  {
    //     this.router.navigateByUrl('/home-page/front-door');
    //   }
    //   else{
    //     this.router.navigateByUrl('/store');
    //   }
    // });
  }

  logOut() {
    this.router.navigateByUrl('/home-page');
    this.store.dispatch(logOut());
    localStorage.removeItem('jwt');
  }
}
