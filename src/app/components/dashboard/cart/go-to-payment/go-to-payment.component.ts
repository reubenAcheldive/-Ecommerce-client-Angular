import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllPayment } from 'src/app/state/selectors/shopping-selectors';

@Component({
  selector: 'app-go-to-payment',
  templateUrl: './go-to-payment.component.html',
  styleUrls: ['./go-to-payment.component.css'],
})
export class GoToPaymentComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.hasCreditCard()
  }
  hasCreditCard(): boolean {
    this.store.select(selectAllPayment).subscribe((data) => {
      if (data&& data.length>0) {
        console.log(data);
        return true;
      }
      return false;
    });
    return false;
  }
}
