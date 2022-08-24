import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, UntypedFormBuilder } from '@angular/forms';







// tslint:disable-next-line:no-duplicate-imports



@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],

})
export class PaymentsComponent implements OnInit {
  constructor(private fb: UntypedFormBuilder) {}

  creditCardForm: UntypedFormGroup;
  ngOnInit(): void {
    this.createFormCreditCard();
  }

  createFormCreditCard(): void {
    this.creditCardForm = this.fb.group({
      cardNumber: new UntypedFormControl(''),
      cardName: new UntypedFormControl(''),
      cardExpires: new UntypedFormControl(''),
      cardSecret: new UntypedFormControl(''),
    });
  }






  handleFormSubmit() {}

  cardHide(card: string) {
    let hideNum = [];
    for (let i = 0; i < card.length; i++) {
      if (i < card.length - 4) {
        hideNum.push('*');
      } else {
        hideNum.push(card[i]);
      }
    }
    return hideNum.join('');
  }
}
