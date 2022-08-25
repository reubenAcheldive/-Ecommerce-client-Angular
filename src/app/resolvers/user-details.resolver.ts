import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap, map, take } from 'rxjs';
import { IEditUserDetails } from '../Interfaces/order/editUserInformation';
import { initEditUserPersonalDetails } from '../state/actions/user.actions';
import { selectAuthDetails } from '../state/selectors/auth-selectors';
import { IUser } from './../Interfaces/auth/userInformation';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolver implements Resolve<IUser> {

  constructor(private store: Store){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
    return this.store.select(selectAuthDetails).pipe(
      tap(({firstName,lastName,userId}) => {
        const user: IEditUserDetails = {firstName, lastName, _id:userId};
        this.store.dispatch(initEditUserPersonalDetails({user}));
      }),
      map((data) => {

        return data;
      }),
      take(1)
    )
  }
}
