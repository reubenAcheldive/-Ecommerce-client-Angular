import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IUser } from 'src/app/Interfaces/auth/userInformation';
import { InitFetchAddress } from 'src/app/state/actions/shopping.actions';
import {
  selectAuthDetails,
  selectUserId,
} from '../../../../state/selectors/auth-selectors';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
  private readonly unsubscribe$ = new Subject<void>();

  constructor(private store: Store) {}
  getUserDetails$: Observable<IUser>;
  ngOnInit(): void {

    this.store
      .select(selectUserId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((selectUserId) => {
        this.store.dispatch(InitFetchAddress({ customerRef: selectUserId }));
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.complete();
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
}
