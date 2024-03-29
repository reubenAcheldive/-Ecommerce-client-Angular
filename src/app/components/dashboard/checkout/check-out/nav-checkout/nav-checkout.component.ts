import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentNameComponent } from 'src/app/UI/content-name/content-name.component';
import { RenderCatListComponent } from '../render-cat-list/render-cat-list.component';
import { Store } from '@ngrx/store';
import { map, Observable, takeUntil, tap, Subject, pipe } from 'rxjs';
import { Cart } from 'src/app/Interfaces/cart/GetCartUser';
import { selectAllPayment } from './../../../../../state/selectors/shopping-selectors';

import { ToastrService } from 'ngx-toastr';
import { OrderDialogConfirmComponent } from 'src/app/UI/order-dialog-confirm/order-dialog-confirm.component';

@Component({
  selector: 'app-nav-checkout',
  templateUrl: './nav-checkout.component.html',
  styleUrls: ['./nav-checkout.component.css'],
})
export class NavCheckoutComponent implements OnInit {
  unsubscribed$ = new Subject<void>();
  constructor(
    public dialog: MatDialog,
    private store: Store,
    private toastr: ToastrService
  ) {}
  @Input() getCart: Cart;
  haveActivePayment: boolean = false;
  ngOnInit(): void {
    this.dialog.open(OrderDialogConfirmComponent, {
      width: '30%',
      height: '50%',
    });
    this.store
      .select(selectAllPayment)
      .pipe(takeUntil(this.unsubscribed$))
      .subscribe((data) => {
        console.log({ data });
        return data ? (this.haveActivePayment = true) : null;
      });
  }

  openDialogContentComponent(): void {
    this.dialog.open(ContentNameComponent, {
      width: 'auto',
      height: 'auto',
    });
  }
  openCartListDialog(): void {
    this.dialog.open(RenderCatListComponent, {
      width: '65%',
      height: 'auto',
    });
  }

  goToFinalORder() {
    console.log(this.haveActivePayment);
    if (this.haveActivePayment && this.getCart?.items?.length > 0) {
      return this.dialog.open(OrderDialogConfirmComponent, {
        width: '30%',
        height: '50%',
      });
    }

    if (this.getCart?.items?.length <= 0) {
      return this.alertToast('אין פריטים', 'הכנס מוצרים לעגלה');
    }
  }
  onDestroy(): void {
    this.unsubscribed$.next();
    this.unsubscribed$.complete();
  }

  alertToast(message: string, sub: string) {
    this.toastr.info(message, sub, {
      positionClass: 'toast-bottom-right',
    });
  }
}
