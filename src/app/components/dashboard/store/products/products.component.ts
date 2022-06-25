import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { fetchProductsInit } from '../../../../state/actions/shopping.actions';
import { selectProducts } from '../../../../state/selectors/shopping-selectors';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  categoryId: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}
  fetchProducts$ = this.store.select(selectProducts);
  ngOnInit() {
    this.route.params.subscribe((p: Params) => {
      if (!p) return;
      this.categoryId = p['category'];
      this.store.dispatch(fetchProductsInit({ categoryId: this.categoryId }));
    });
  }
}
