import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartItems } from 'src/app/InterfaceModal/GetCartByCartIdResponse';
import { Shopping } from 'src/app/state/reducers';
import { lastOrderDetail } from '../../../../app/InterfaceModal/lastOrderDetail';
import * as ShoppingSelector from '../../../../app/state/selectors/shopping-selectors';
import * as ShoppingAction from '../../../../app/state/actions/shopping.actions';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { OrderService } from 'src/app/services/store/order/order.service';
import saveAs from 'file-saver';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {

  private unSubscriber$ = new Subject<void>();
  constructor(private store: Store<Shopping>, private router: Router,private orderService: OrderService) {}

  orderDetails: lastOrderDetail;
  orderId: string;
  cartId:string;
  cartLists: CartItems[];
  ngOnInit(): void {
    this.store
      .select(ShoppingSelector.returnNewOrderId).pipe(takeUntil(this.unSubscriber$))
      .subscribe((_idOrder) => {
        this.store.dispatch(ShoppingAction.lastOrderInit({ _id: _idOrder }));
      });
    this.store
      .select(ShoppingSelector.lastOrderDetail).pipe(takeUntil(this.unSubscriber$))
      .subscribe((lastOrderDetail) => {
        console.log({ lastOrderDetail });

        if (lastOrderDetail) {
          this.orderDetails = lastOrderDetail[0]
          this.cartId = lastOrderDetail[0].cartRef
          this.orderId =  lastOrderDetail[0]._id

        };
      });
    this.store
      .select(ShoppingSelector.selectAllCartList).pipe(takeUntil(this.unSubscriber$))
      .subscribe((cartList) => {
        if (cartList) this.cartLists = cartList;
      });
  }
  startNewShopping() {
    this.store.dispatch(
      ShoppingAction.createNewCartInit({
        customerRef: this.orderDetails.customerRef,
      })
    );
    this.router.navigate(['/store']);
  }

  downloadReceipt(){

  this.orderService.downloadReceipt(this.cartId,this.orderId).subscribe((receipt: any) => {
      const blob = new Blob ([receipt],{type:"text/plain;charset=utf-8"});
      saveAs(blob, "MyStore Receipt");
    }, error => {
      console.log(error.message);
    })
  };
  ngOnDestroy() {
    this.unSubscriber$.next();
    this.unSubscriber$.complete();
  }
}
