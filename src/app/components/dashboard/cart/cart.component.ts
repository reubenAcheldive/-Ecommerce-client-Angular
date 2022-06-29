import { Store } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { selectAuthDetails } from 'src/app/state/selectors/auth-selectors';
import { selectCartList } from '../../../state/selectors/shopping-selectors';
import { CartResponseForUser } from 'src/app/Interfaces/GetCartUser';
import { filter, Observable } from 'rxjs';
import { IUserInformation } from './../../../Interfaces/userInformation';
import { deleteAllItemsInCartInit } from 'src/app/state/actions/shopping.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  constructor(private store: Store) {}
  getUserId: string;
  cartList: CartResponseForUser;

  public cartData$: Observable<CartResponseForUser>;

  ngOnInit(): void {
    this.store
      .select(selectAuthDetails)
      .pipe(filter((user: IUserInformation) => !!user))
      .subscribe((user: IUserInformation) => (this.getUserId = user.userId));
    this.cartData$ = this.store.select(selectCartList);
  }
  deleteAllItems(_id:string){
    this.store.dispatch(deleteAllItemsInCartInit({cartId:_id}))
  }
}
