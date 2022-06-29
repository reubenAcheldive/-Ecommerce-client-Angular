import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item } from 'src/app/Interfaces/GetCartUser';
import { initUpdateItemQuantityInCart } from './../../../../state/actions/shopping.actions';

@Component({
  selector: 'app-button-quantity',
  templateUrl: './button-quantity.component.html',
  styleUrls: ['./button-quantity.component.css']
})
export class ButtonQuantityComponent implements OnInit {

  public amount: number = 0;
  private _item: Item;
  @Input() set item(value: Item) {
    this._item = value;
    this.amount = this._item.quantity;
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    // this.store.select()
  }

  public increment(): void {
    this.amount += 1;
    this.dispatchUpdateAction(this._item);
  }

  public decrement() {
    if (this.amount > 0) {
      this.amount -= 1;
      this.dispatchUpdateAction(this._item);
    }
  }

  private dispatchUpdateAction(product: Item): void {
    this.store.dispatch(
      initUpdateItemQuantityInCart({
        itemUpdate: {
          productRefId: product.productRefId._id,
          quantity: this.amount,
          idCart: '62bc60407a0a29c9f3c77b31',
        },
      })
    );
  }
}
