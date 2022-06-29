import { CartResponseForUser } from './../../../../Interfaces/GetCartUser';
import { Observable } from 'rxjs';
import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { DeleteSingleProductFromCartListInit } from './../../../../state/actions/shopping.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListsComponent implements OnInit {
  @Input() cartList: CartResponseForUser;
  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log({ cartList: this.cartList });
  }
  deleteOnItem(cartId: string, itemId: string): void {
    this.store.dispatch(
      DeleteSingleProductFromCartListInit({ cartId, itemId })
    );
  }
}
