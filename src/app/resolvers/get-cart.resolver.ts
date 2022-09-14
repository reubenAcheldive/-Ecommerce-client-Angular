import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, of, take, tap } from 'rxjs';
import { Cart } from '../Interfaces/cart/GetCartUser';
import { selectCartList } from '../state/selectors/shopping-selectors';

@Injectable({
  providedIn: 'root',
})
export class GetCartResolver implements Resolve<Cart> {
  constructor(private store: Store) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Cart> {
    return this.store.select(selectCartList).pipe(
      tap((data) => {
        return data;
      }),
      map((data) => data),
      take(1)
    );
  }
}
