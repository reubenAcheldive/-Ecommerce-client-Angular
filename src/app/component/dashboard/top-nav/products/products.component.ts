import { Subject, takeUntil, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { fetchProductsInit } from '../../../../state/actions/shopping.actions';
import { selectProducts } from '../../../../state/selectors/shopping-selectors';
import { IProduct } from 'src/app/Interfaces/Products';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private store: Store,
   
  ) {}
  unsubscribe$ = new Subject<void>();
  categoryId: string;
  amount: number = 1;
  products$: Observable<IProduct[]> = this.store.select(selectProducts);
  ngOnInit(): void {
    console.log(1);
    
    this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe((params) => {
      this.categoryId = params['categoryRef'];
      this.fetchNewProducts();
    });
  }

  fetchNewProducts() {
    if (this.categoryId) {
      this.store.dispatch(fetchProductsInit({ categoryId: this.categoryId }));
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.complete();
    this.unsubscribe$.next();
  }

}
