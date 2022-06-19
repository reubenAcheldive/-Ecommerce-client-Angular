import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import { ActivatedRoute, Params } from '@angular/router';
import * as ShoppingSelectors from '../../../state/selectors/shopping-selectors';
import { Shopping } from 'src/app/state/reducers';

import * as productAction from '../../../state/actions/shopping.actions';
import { MatDialog } from '@angular/material/dialog';

import { Subject, takeUntil } from 'rxjs';
import { AddProductComponent } from '../add-product/add-product.component';
import { IProduct } from 'src/app/Interfaces/Products';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() loading$:boolean = false;
  private readonly unSubscriber$ = new Subject<void>();
  public products$!: IProduct[] | null;
  public newProductArray = [];
  public cartId: string;

  public infoAuth$?: boolean = false;
  shoppingCardId!: string;

  private currentCategoryId!: string;

  constructor(
    private store: Store<Shopping>,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  openDialog(product: IProduct) {
    const dialogRef = this.dialog.open(AddProductComponent, {
      data: product,
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unSubscriber$))
      .subscribe((result) => {
        if(!result) return;
        const [quantity, product] = result;
console.log({product});

        const { _id } = product;


        const addProduct: {
          cartId: string;
          productRefId: string;
          quantity: number;
        } = {
          cartId: this.cartId,
          productRefId:  _id ,
          quantity,
        };
        console.log('this carTef in modal add ', this.cartId);
        console.log({addProduct});
        
        this.store.dispatch(
          productAction.addProductToListInit({
            product: addProduct,
          })
        );
      });
  }

  ngOnInit(): void {
    this.store
      .select(ShoppingSelectors.selectProducts)
      .pipe(takeUntil(this.unSubscriber$))
      .subscribe((products) => {
        this.products$ = products;
      });
    this.getParamsOfCategoryId();
    this.store
      .select(ShoppingSelectors.selectLoginInformation)
      .pipe(takeUntil(this.unSubscriber$))
      .subscribe((infoLogin) => {
        if (infoLogin) {
          this.infoAuth$ = infoLogin.isAdmin;
        }
      });

    this.store
      .select(ShoppingSelectors.selectProductEditByAdmin)
      .pipe(takeUntil(this.unSubscriber$))
      .subscribe((product) => {
        if (product) {
          this.fetchProductsByCategoryId(product.categoryRef);
        }
      });
    this.fetchCartId();
    this.store
      .select(ShoppingSelectors.selectAllCartList)
      .pipe(takeUntil(this.unSubscriber$))
      .subscribe((items) => {
        this.newProductArray = items;
      });
  }

  getParamsOfCategoryId() {
    this.route.params
      .pipe(takeUntil(this.unSubscriber$))
      .subscribe((params: Params) => {
        if (params['categoryRef']) {
          this.currentCategoryId = params['categoryRef'];
          this.fetchProductsByCategoryId(this.currentCategoryId);
        }
      });
  }

  fetchProductsByCategoryId(categoryId: string): void {
    if (this.currentCategoryId) {
      this.store.dispatch(productAction.fetchProductsInit({ categoryId }));
    }
  }

  fetchCartId() {
    this.store
      .select(ShoppingSelectors.selectIdCart)
      .pipe(takeUntil(this.unSubscriber$))
      .subscribe((cartId) => {
        if (cartId) {
          this.cartId = cartId;
        }
      });
  }
  ngOnDestroy() {
    this.unSubscriber$.next();
    this.unSubscriber$.complete();
  }
}
