import { Store } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { selectAuthDetails } from 'src/app/state/selectors/auth-selectors';
import { selectCartList } from '../../../state/selectors/shopping-selectors';
import { filter, Observable, Subject, takeUntil } from 'rxjs';
import { IUser } from '../../../Interfaces/auth/userInformation';
import { deleteAllItemsInCartInit } from 'src/app/state/actions/shopping.actions';
import { Cart } from 'src/app/Interfaces/cart/GetCartUser';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  constructor(private store: Store) {}
  getUserId: string |null;
  cartList: Cart|null;
  unsubscribe$ = new Subject<void>();
  public cartData$: Observable<Cart>|null;

  ngOnInit(): void {
    this.store
      .select(selectAuthDetails)
      .pipe(filter((user: IUser) => !!user))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user: IUser) => (this.getUserId = user.userId));
    this.cartData$ = this.store
      .select(selectCartList)
      .pipe(takeUntil(this.unsubscribe$));
  }
  deleteAllItems(_id: string) {
    this.store.dispatch(deleteAllItemsInCartInit({ cartId: _id }));
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
