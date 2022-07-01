import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscriber, Subscription, takeUntil } from 'rxjs';
import { fetchProductsInit, initUpdateItemQuantityInCart } from '../../../../state/actions/shopping.actions';
import { selectProducts } from '../../../../state/selectors/shopping-selectors';
import { IProduct } from './../../../../Interfaces/Products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  categoryId: string;
  unsubscribe$: Subscription;
  constructor(private route: ActivatedRoute, private store: Store) {}

  public fetchProducts$: Observable<IProduct[]> =
    this.store.select(selectProducts);

  ngOnInit() {
    this.unsubscribe$ = this.route.params.subscribe((params: Params) => {
      if (!!params) {
        this.categoryId = params['category'];
        this.store.dispatch(fetchProductsInit({ categoryId: this.categoryId }));
      }
    });
  }

  public onQuantityChange(quantity: number, item: IProduct): void {
    this.store.dispatch(
      initUpdateItemQuantityInCart({
        itemUpdate: {
          productRefId: item._id,
          quantity,
          idCart: '62bc60407a0a29c9f3c77b31',
        },
      })
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.unsubscribe();
  }
}
