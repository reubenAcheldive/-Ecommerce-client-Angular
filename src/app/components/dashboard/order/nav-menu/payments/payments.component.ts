import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, UntypedFormBuilder } from '@angular/forms';

import * as _moment from 'moment';



import {MatDatepicker} from '@angular/material/datepicker';

// tslint:disable-next-line:no-duplicate-imports
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

const moment = _moment;
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

  date = new UntypedFormControl(moment());



  setMonthAndYear(normalizedMonthAndYear: _moment.Moment, datepicker: MatDatepicker<_moment.Moment>) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
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
