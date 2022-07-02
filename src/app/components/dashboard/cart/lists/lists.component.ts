import { Observable } from 'rxjs';
import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { DeleteSingleProductFromCartListInit, initUpdateItemQuantityInCart } from './../../../../state/actions/shopping.actions';
import { Store } from '@ngrx/store';
import { selectProducts } from 'src/app/state/selectors/shopping-selectors';
import { IProduct } from 'src/app/Interfaces/Products';
import { Cart, Item } from 'src/app/Interfaces/cart/GetCartUser';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListsComponent implements OnInit {

  @Input() cartList: Cart;

  public fetchProducts$: Observable<IProduct[]> =
    this.store.select(selectProducts);
  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log({ cartList: this.cartList });
  }

  public onQuantityChange(quantity: number, item: Item): void{
    this.store.dispatch(
      initUpdateItemQuantityInCart({
        itemUpdate: {
          productRefId: item.productRefId._id,
          quantity,
          idCart: '62bc60407a0a29c9f3c77b31',
        },
      })
    );
  }

  deleteOnItem(cartId: string, itemId: string): void {
    this.store.dispatch(
      DeleteSingleProductFromCartListInit({ cartId, itemId })
    );
  }
}
