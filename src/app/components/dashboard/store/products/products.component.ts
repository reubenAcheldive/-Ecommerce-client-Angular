import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscriber, Subscription, takeUntil } from 'rxjs';
import {
  fetchProductsInit,
  initUpdateItemQuantityInCart,
} from '../../../../state/actions/shopping.actions';
import { selectProducts } from '../../../../state/selectors/shopping-selectors';
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
  constructor(private route: ActivatedRoute, private store: Store) {}

  public fetchProducts$: Observable<IProduct[]> =
    this.store.select(selectProducts);

  ngOnInit() {
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

  public onQuantityChange(quantity: number, item: IProduct): void {
    this.store
      .select(selectUserId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((selectUserId) => {
        this.store.dispatch(
          initUpdateItemQuantityInCart({
            itemUpdate: {
              productRefId: item._id,
              quantity,
              idCart: selectUserId,
            },
          })
        );
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.unsubscribe();
  }
}
