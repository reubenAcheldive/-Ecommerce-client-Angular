import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Cart, Item } from 'src/app/Interfaces/cart/GetCartUser';
import { initUpdateItemQuantityInCart } from 'src/app/state/actions/shopping.actions';
import { Shopping } from 'src/app/state/reducers';
import { selectCartList } from 'src/app/state/selectors/shopping-selectors';

@Component({
  selector: 'app-render-cat-list',
  templateUrl: './render-cat-list.component.html',
  styleUrls: ['./render-cat-list.component.css'],
})
export class RenderCatListComponent implements OnInit {
  constructor(private store: Store<Shopping>) {}
  getCart: Cart;


  public onQuantityChange(quantity: number, item: Item): void {
    this.store.dispatch(
      initUpdateItemQuantityInCart({
        itemUpdate: {
          productRefId: item.productRefId._id,
          quantity,
          idCart:this.getCart.customerRef,
        },
      })
    );
  }
  ngOnInit(): void {
    this.store
      .select(selectCartList)
      .subscribe((cart) => cart && (this.getCart = cart));
  }
}
