import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscriber, Subscription, takeUntil } from 'rxjs';
import {
  fetchProductsInit,
  initUpdateItemQuantityInCart,
} from '../../../../state/actions/shopping.actions';
import {
  selectCartList,
  selectProducts,
} from '../../../../state/selectors/shopping-selectors';
import { IProduct } from './../../../../Interfaces/Products';
import { selectUserId } from './../../../../state/selectors/auth-selectors';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  categoryId: string;
  unsubscribe$ = new Subject<void>();
  cartId: string;
  constructor(private route: ActivatedRoute, private store: Store) {}

  public fetchProducts$: Observable<IProduct[]> =
    this.store.select(selectProducts);

  ngOnInit() {
    this.store
      .select(selectCartList)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => this.cartId = data?._id);
   
    this.route.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: Params) => {
        if (!!params) {
          this.categoryId = params['category'];
          this.store.dispatch(
            fetchProductsInit({ categoryId: this.categoryId })
          );
        }
      });
  }
  // this.store
  //     .select(selectCartList)
  //     .pipe(takeUntil(this.unsubscribe$))

  public onQuantityChange(quantity: number, item: IProduct): void {
  
    return this.store.dispatch(
      initUpdateItemQuantityInCart({
        itemUpdate: {
          productRefId: item._id,
          quantity,
          idCart: this.cartId,
        },
      })
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.unsubscribe();
  }
}
