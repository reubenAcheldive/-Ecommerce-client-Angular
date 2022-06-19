import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.css'],
})
export class SelectProductComponent implements OnInit {
  constructor() {}
  amount: number = 1;

  ngOnInit(): void {}
  increment() {
    this.amount++;
   
  }
  decrement() {
    if (this.amount === 1) return;
    this.amount--;
  }
}
