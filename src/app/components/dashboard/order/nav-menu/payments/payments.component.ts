import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  creditCardForm: FormGroup;
  ngOnInit(): void {}

  createFormCreditCard(): void {
    this.creditCardForm = this.fb.group({
      cardNumber: new FormControl(''),
      cardName: new FormControl(''),
      cardExpires: new FormControl(''),
      cardSecret: new FormControl(''),
    });
  }
}
