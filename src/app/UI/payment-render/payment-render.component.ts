import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { IPayment } from 'src/app/Interfaces/Payment/Payment';
import { initDeletePaymentBy_Id } from 'src/app/state/actions/shopping.actions';
import { selectAllPayment } from 'src/app/state/selectors/shopping-selectors';

@Component({
  selector: 'app-payment-render',
  templateUrl: './payment-render.component.html',
  styleUrls: ['./payment-render.component.css'],
})
export class PaymentRenderComponent implements OnInit {
  constructor(private store: Store) {}
  payment$ = this.store.select(selectAllPayment);
  @Input() showDeleteButton: boolean = true;
  ngOnInit(): void {}
  deleteCard(_id: string) {
    console.log(_id);
    this.store.dispatch(initDeletePaymentBy_Id({ _id }));
  }
}
