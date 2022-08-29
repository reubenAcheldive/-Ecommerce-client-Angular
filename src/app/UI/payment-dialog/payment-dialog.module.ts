import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentDialogComponent } from './payment-dialog.component';
import { NgCreditCardModule } from 'angular-credit-card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaymentDialogComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgCreditCardModule],
  exports:[PaymentDialogComponent]
})
export class PaymentDialogModule {}
