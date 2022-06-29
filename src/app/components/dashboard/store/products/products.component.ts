import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchProductsInit } from '../../../../state/actions/shopping.actions';
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
  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {}

  public fetchProducts$: Observable<IProduct[]> = this.store.select(selectProducts);

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (!!params) {
        this.categoryId = params['category'];
        this.store.dispatch(fetchProductsInit({ categoryId: this.categoryId }));
      }
    });
  }
}
