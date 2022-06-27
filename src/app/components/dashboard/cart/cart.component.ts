import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { selectLoginInformation } from 'src/app/state/selectors/shopping-selectors';
import { getCartByCartIdInit } from '../../../state/actions/shopping.actions';
import { selectCartList } from '../../../state/selectors/shopping-selectors';
import { CartResponseForUser } from 'src/app/Interfaces/GetCartUser';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private store: Store) {}
  getUserId: string;
  cartList: Observable<CartResponseForUser> =this.store.select(selectCartList);
  ngOnInit(): void {
    this.store
      .select(selectLoginInformation)
      .subscribe((l) => (this.getUserId = l.userId));

    if (this.getUserId) {
      this.store.dispatch(
        getCartByCartIdInit({ cartId: '62b882d975914674d3d55b02' })
      );

    }
  }
}
