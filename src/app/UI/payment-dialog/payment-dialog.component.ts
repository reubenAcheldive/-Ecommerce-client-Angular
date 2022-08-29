import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.css']
})
export class PaymentDialogComponent implements OnInit {

  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<PaymentDialogComponent>) {}

  creditCardForm!: FormGroup<{
    cardNumber: FormControl<string>;
    cardName: FormControl<string>;
    cardExpires: FormControl<string>;
    cardSecret: FormControl<string>;
  }>;
  ngOnInit(): void {
    this.createFormCreditCard();
  }

  createFormCreditCard(): void {
    this.creditCardForm = this.fb.nonNullable.group({
      cardExpires: this.fb.nonNullable.control(
        '',
        Validators.pattern('^[0-9]*$')
      ),
      cardName: this.fb.nonNullable.control(''),
      cardNumber: this.fb.nonNullable.control('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.max(16),
        Validators.minLength(16),
      ]),
      cardSecret: this.fb.nonNullable.control(
        '',
        Validators.pattern('^[0-9]*$')
      ),
    });
  }
  public get validCardNumberPattern() {
    return this.creditCardForm.get('cardNumber').hasError('pattern');
  }
  public get validCardNumberMinAndMaxLength() {
    this.creditCardForm
    return (
      this.creditCardForm.get('cardNumber').hasError('maxLength') &&
      this.creditCardForm.get('cardNumber').hasError('minLength')
    );
  }

  handleFormSubmit() {}

  loadFromHttp(): void {}

  cardHide(card: string) {
    let hideNum = [];
    if (!this.validCardNumberPattern) {
      for (let i = 0; i < card.length; i++) {
        if (i < card.length - 4) {
          hideNum.push('*');
        } else {
          hideNum.push(card[i]);
        }
      }
    }
    return hideNum.join('');
  }

}
