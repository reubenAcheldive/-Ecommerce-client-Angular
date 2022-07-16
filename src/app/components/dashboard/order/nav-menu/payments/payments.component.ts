import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import * as _moment from 'moment';

import { DateAdapter ,MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';

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
  constructor(private fb: FormBuilder) {}

  creditCardForm: FormGroup;
  ngOnInit(): void {
    this.createFormCreditCard();
  }

  createFormCreditCard(): void {
    this.creditCardForm = this.fb.group({
      cardNumber: new FormControl(''),
      cardName: new FormControl(''),
      cardExpires: new FormControl(''),
      cardSecret: new FormControl(''),
    });
  }

  date = new FormControl(moment());



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
