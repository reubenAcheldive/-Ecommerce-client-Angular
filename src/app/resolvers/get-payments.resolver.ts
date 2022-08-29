import { Injectable, OnInit } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, of, tap, exhaustMap, take, switchMap } from 'rxjs';
import { IPayment } from '../Interfaces/Payment/Payment';
import { initGetAllPaymentByCustomerId } from '../state/actions/shopping.actions';
import { selectAuthDetails } from '../state/selectors/auth-selectors';
import { getALlPayment } from '../state/selectors/shopping-selectors';

@Injectable({
  providedIn: 'root',
})
export class GetPaymentsResolver implements Resolve<IPayment[]> {
  constructor(private store: Store) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IPayment[]> {
    return this.store.select(selectAuthDetails).pipe(
      tap(({ userId }) => {
        console.log({ userId }, 'tap');
        return userId;
      }),
      switchMap(({ userId }) => {
        console.log({ userId }, 'switchMap');
        this.store.dispatch(
          initGetAllPaymentByCustomerId({ customerId: userId })
        );
        return this.store.select(getALlPayment).pipe(
          map((data) => {
            return data;
          })
        );
      })
    );
  }
}
