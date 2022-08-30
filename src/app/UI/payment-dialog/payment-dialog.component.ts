import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IPayment } from 'src/app/Interfaces/Payment/Payment';
import {
  initCreateNewPayment,
  initDeletePaymentBy_Id,
} from 'src/app/state/actions/shopping.actions';
import { selectCartList } from 'src/app/state/selectors/shopping-selectors';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.css'],
})
export class PaymentDialogComponent implements OnInit {
  constructor(
    private store: Store,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PaymentDialogComponent>
  ) {}

  cartRefId: string;
  customerId: string;
  creditCardForm!: FormGroup<{
    cardNumber: FormControl<string>;
    name1: FormControl<string>;
    expiredDate: FormControl<string>;
    cvc: FormControl<string>;
  }>;
  ngOnInit(): void {
    this.createFormCreditCard();
    this.store.select(selectCartList).subscribe((cart) => {
      this.cartRefId = cart._id;
      this.customerId = cart.customerRef;
    });
  }

  createFormCreditCard(): void {
    this.creditCardForm = this.fb.nonNullable.group({
      expiredDate: this.fb.nonNullable.control(
        '',
        Validators.pattern('^[0-9]*$')
      ),
      name1: this.fb.nonNullable.control(''),
      cardNumber: this.fb.nonNullable.control('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.max(16),
        Validators.minLength(16),
      ]),
      cvc: this.fb.nonNullable.control('', Validators.pattern('^[0-9]*$')),
    });
  }
  public get validCardNumberPattern() {
    return this.creditCardForm.get('cardNumber').hasError('pattern');
  }
  public get validCardNumberMinAndMaxLength() {
    this.creditCardForm;
    return (
      this.creditCardForm.get('cardNumber').hasError('maxLength') &&
      this.creditCardForm.get('cardNumber').hasError('minLength')
    );
  }

  handleFormSubmit() {
    const { expiredDate, name1, cardNumber, cvc } = this.creditCardForm.value;

    const payload: IPayment = {
      cartRef: this.cartRefId,

      expiredDate,
      name:name1,
      cardNumber,
      cvc,
      customerRef: this.customerId,
    };
    console.log({ payload });

    this.store.dispatch(
      initCreateNewPayment({
        payload: {
          cardNumber,
          cartRef:this.cartRefId,
          customerRef:this.customerId,
          cvc,
          expiredDate,
          name:name1,
        },
      })
    );
    this.dialogRef.close();
  }

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
