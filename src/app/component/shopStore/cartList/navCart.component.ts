import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Store } from '@ngrx/store';

import { Shopping } from 'src/app/state/reducers';

import * as ShoppingSelectors from '../../../state/selectors/shopping-selectors';

import * as shoppingAction from '../../../state/actions/shopping.actions';

import { FormControl, FormGroup } from '@angular/forms';

import { Subject, takeUntil } from 'rxjs';
import { CartItems } from 'src/app/InterfaceModal/GetCartByCartIdResponse';
import { Router } from '@angular/router';
import { SidenavService } from '../../../services/sidenave/sidenav.service';

@Component({
  selector: 'app-navCart',
  templateUrl: './navCart.component.html',
  styleUrls: ['./navCart.component.css'],
})
export class navCartComponent implements OnInit, OnChanges {
  public itemsForm!: FormGroup;
  private readonly unSubscriber$ = new Subject<void>();
  cartLists: CartItems[] = [];
  public displayedColumns: string[] = [
    'image',
    'item',
    'quantity',
    'price',
    'remove',
  ];
  public handleError: boolean = false;
  constructor(private store: Store<Shopping>, private router: Router,private sidenav:SidenavService) {}

  cartId: string;
  ngOnInit(): void {
    this.store
      .select(ShoppingSelectors.selectLoginInformation)
      .pipe(takeUntil(this.unSubscriber$))
      .subscribe((info) => {
        if (info) {
          this.store.dispatch(
            shoppingAction.getCartByCustomerIdInit({ customerRef: info.userId })
          );
        }
      });
    this.fetchCartItems();
    this.store.select(ShoppingSelectors.selectIdCart).pipe(takeUntil(this.unSubscriber$)).subscribe((cartId) => {
      if (cartId) this.cartId = cartId;
    });
  }
  fetchCartItems() {
    this.store
      .select(ShoppingSelectors.selectAllCartList)
      .pipe(takeUntil(this.unSubscriber$))
      .subscribe((cartLists) => {
        if (cartLists) {
          this.cartLists = cartLists;
        }
      });
  }
  getTotalCost() {
    const item = this.cartLists.map(
      ({ quantity, products }: any) => quantity * products.price
    );
    item.reduce((acc: number, value: number) => acc + value, 0);
    return item.reduce((acc: number, value: number) => acc + value, 0);
  }
  handelCloseSideNav(){
    this.sidenav.openSidebar.next(false)
  }
  ngOnChanges(): void {}

  onDeleteCartProduct(cartId: string, productId: string) {
    console.log(cartId, productId);

    this.store.dispatch(
      shoppingAction.DeleteSingleProductFromCartListInit({ cartId, productId })
    );
  }

  onDeleteAllCartList(cartId?: string) {
    this.store.dispatch(
      shoppingAction.DeleteAllProductCartListInit({ cartId })
    );
  }

  goToOrder() {
    if (this.cartLists.length < 1) {
      this.handleError = !this.handleError;
    } else {
      this.router.navigate(['/store/order']);
      this.handleError = !this.handleError;
    }
    setTimeout(()=>{
      this.handleError = !this.handleError;
      console.log(1)
    },3000)
  }

  OnDestroy() {
    this.unSubscriber$.next();
    this.unSubscriber$.complete();
    
  }
}
