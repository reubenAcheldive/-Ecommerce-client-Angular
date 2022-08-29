import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDialogComponent } from 'src/app/UI/payment-dialog/payment-dialog.component';

// tslint:disable-next-line:no-duplicate-imports
import { ActivatedRoute } from '@angular/router';
import { IPayment } from 'src/app/Interfaces/Payment/Payment';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent {
  constructor(public dialog: MatDialog, private route: ActivatedRoute) {}
  ngOnInit() {
    const payments:IPayment[] = this.route.snapshot.data['payments'];
    console.log({ payments });

  }
  openDialog(
    enterAnimationDuration: string = '0ms',
    exitAnimationDuration: string = '0ms'
  ): void {
    this.dialog.open(PaymentDialogComponent, {
      width: '30%',
      height: '80%',
      position: {},
    });
  }
}
