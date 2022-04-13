import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Shopping } from '../../state/reducers/index';
import * as ShoppingActions from '../../state/actions/shopping.actions';
import * as ShoppingSelectors from '../../state/selectors/shopping-selectors';
import { Router } from '@angular/router';
import { IUserInformation } from 'src/app/Interfaces/userInformation';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
})
export class FrontPageComponent implements OnInit {
  private readonly unsubscribe$ = new Subject<void>();
  getCustomerDetails: IUserInformation;
  lastCartDate:number | Date
  constructor(private store: Store<Shopping>, private router: Router) {}

  ngOnInit(): void {
    this.handleLoginDetails();
    if(this.getCustomerDetails)
    this.fetchLastCartDate(this.getCustomerDetails.userId);
    this.store
      .select(ShoppingSelectors.getLastCartCreated).pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => this.lastCartDate = data);
  }
  handleLoginDetails() {
    this.store
      .select(ShoppingSelectors.selectLoginInformation)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((loginInfo) => {
        console.log("logininfo" ,loginInfo);
        
        if (loginInfo) this.getCustomerDetails = loginInfo;

      });
  }
  fetchLastCartDate(customerRef: string) {
    console.log("frondoor , " ,customerRef);

    this.store.dispatch(
      ShoppingActions.getCartByCustomerIdInit({
        customerRef,
      })
    );
  }

  getEmptyCart() {
    this.store.dispatch(
      ShoppingActions.createNewCartInit({
        customerRef: this.getCustomerDetails.userId,
      })
    );
    this.router.navigateByUrl('/store');
  }
  onPreviousCart() {
    this.router.navigateByUrl('/store');
  }
  OnDestroy() {
    this.unsubscribe$.complete();
    this.unsubscribe$.next();
  }
}
