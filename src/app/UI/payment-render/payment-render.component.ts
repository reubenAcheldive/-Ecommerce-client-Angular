import { Component, OnInit,Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPayment } from 'src/app/Interfaces/Payment/Payment';
import { initDeletePaymentBy_Id } from 'src/app/state/actions/shopping.actions';

@Component({
  selector: 'app-payment-render',
  templateUrl: './payment-render.component.html',
  styleUrls: ['./payment-render.component.css']
})
export class PaymentRenderComponent implements OnInit {
@Input() payment:IPayment
  constructor(private store:Store) { }

  ngOnInit(): void {
    console.log({payment:this.payment})
  }
  deleteCard(_id: string) {
    console.log(_id);
    this.store.dispatch(initDeletePaymentBy_Id({ _id }));
  }
}
