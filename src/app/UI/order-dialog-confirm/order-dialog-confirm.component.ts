import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map, Observable, Subject, take, takeUntil } from 'rxjs';
import { IPayment } from 'src/app/Interfaces/Payment/Payment';
import { selectAllPayment } from 'src/app/state/selectors/shopping-selectors';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-order-dialog-confirm',
  templateUrl: './order-dialog-confirm.component.html',
  styleUrls: ['./order-dialog-confirm.component.css'],
})
export class OrderDialogConfirmComponent implements OnInit, OnDestroy {
  selectedValue: string;
  unsubscribe$ = new Subject<void>();
  paymentsSelect = [
    { value: '1', viewValue: 'תשלומים 1' },
    { value: '2', viewValue: 'תשלומים 2' },
    { value: '3', viewValue: 'תשלומים 3' },
  ];
  constructor(private store: Store, private dialog: MatDialog) {}
  ngOnDestroy(): void {
    this.unsubscribe$.complete();
    this.unsubscribe$.next();
  }
  payments: IPayment[] = [];
  ngOnInit(): void {
    this.store
      .select(selectAllPayment)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => (this.payments = data));
  }
  openNewPAymentDialog() {
    this.dialog.open(PaymentDialogComponent);
  }
}
