import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-amount',
  templateUrl: './add-product-amount.component.html',
  styleUrls: ['./add-product-amount.component.css'],
})
export class AddProductAmountComponent implements OnInit {
  amount: number = 0;
  constructor() {}

  ngOnInit(): void {}

  increment() {
    this.amount++;
  }
  decrement() {
    if (this.amount <1 )  return;
     this.amount--;
  }
}
