import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDialogComponent } from 'src/app/UI/payment-dialog/payment-dialog.component';

// tslint:disable-next-line:no-duplicate-imports

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent {
  constructor(public dialog: MatDialog) {}
  ngOnInit() {
    this.openDialog();
  }
  openDialog(
    enterAnimationDuration: string = '0ms',
    exitAnimationDuration: string = '0ms'
  ): void {
    this.dialog.open(PaymentDialogComponent, {
      width: '30%',
      height: '80%',
      position: {

      },
    });
  }
}
