import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { selectAuthDetails } from 'src/app/state/selectors/auth-selectors';
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
  cartList: CartResponseForUser;
  ngOnInit(): void {
    this.store
      .select(selectAuthDetails)
      .subscribe((l) => (this.getUserId = l.userId));

    
      this.store.dispatch(
        getCartByCartIdInit({ cartId: '62baf5901d73c7a1aaad5bbe' })
      );
  
    this.store.select(selectCartList).subscribe((cartList =>  this.cartList =cartList));
  }
}
