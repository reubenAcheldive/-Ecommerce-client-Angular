import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDialogComponent } from 'src/app/UI/payment-dialog/payment-dialog.component';

// tslint:disable-next-line:no-duplicate-imports
import { ActivatedRoute } from '@angular/router';
import { IPayment } from 'src/app/Interfaces/Payment/Payment';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  initDeletePaymentBy_Id,
  initGetAllPaymentByCustomerId,
} from 'src/app/state/actions/shopping.actions';
import { getALlPayment } from 'src/app/state/selectors/shopping-selectors';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent {
  constructor(
    private store: Store,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {}
  public payments$: Observable<IPayment[]> = this.store.select(getALlPayment);
  ngOnInit() {
    const getPayments = this.route.snapshot.data['userDetails'];
    if (getPayments) {
      alert(getPayments.userId)
      this.store.dispatch(
        initGetAllPaymentByCustomerId({ customerId: getPayments.userId })
      );
    }
    console.log({ getPayments });
  }
  openDialog(
    enterAnimationDuration: string = '0ms',
    exitAnimationDuration: string = '0ms'
  ): void {
    this.dialog.open(PaymentDialogComponent, {
      width: 'auto',
      height: 'auto',

      position: {},
    });
  }

}
