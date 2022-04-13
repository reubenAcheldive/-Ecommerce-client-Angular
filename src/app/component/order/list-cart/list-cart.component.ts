import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import {
  CartItems,

} from 'src/app/Interfaces/GetCartByCartIdResponse';
import { Shopping } from '../../../state/reducers/index';
import * as shoppingSelector from '../../../state/selectors/shopping-selectors';
@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.css'],
})
export class ListCartComponent implements OnInit {
  private unSubscriber$ = new Subject<void>();
  constructor(private store: Store<Shopping>) {}
  listProduct: CartItems[] = [];
  dataSource: {
    name: string;
    picture: string;
    quantity: number;
    price: number;
    totalPrice: number;
  }[];
  displayedColumns = ['name', ' ', 'cost', 'quantity', 'Final price'];
  ngOnInit(): void {
    this.store
      .select(shoppingSelector.selectAllCartList)
      .pipe(takeUntil(this.unSubscriber$))
      .subscribe((listProduct) => {
        if (listProduct) {
          this.listProduct = listProduct;
          this.dataSource = this.listProductNormalized();
          this.sumAllQuantity();
        }
      });
  }

  listProductNormalized() {
    const newItem = this.listProduct.map(({ products, quantity }) => {
      return {
        name: products.name,
        picture: products.imgUrl,
        quantity: quantity,
        price: products.price,
        totalPrice: products.price * quantity,
      };
    });

    return newItem;
  }

  getTotalCost() {
    const item = this.listProduct.map(
      ({ quantity, products }: any) => quantity * products.price
    );
    item.reduce((acc: number, value: number) => acc + value, 0);
    return item.reduce((acc: number, value: number) => acc + value, 0);
  }

  sumAllQuantity() {
    return this.listProduct
      .map((item) => {
        return item.quantity;
      })
      .reduce((acc, value) => acc + value, 0);
  }

  onDestroy() {
    this.unSubscriber$.next();
    this.unSubscriber$.complete();
  }
}
