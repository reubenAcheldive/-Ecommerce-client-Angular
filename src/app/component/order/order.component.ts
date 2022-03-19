import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Shopping } from '../../state/reducers/index';
import * as ShoppingSelect from '../../state/selectors/shopping-selectors';
import * as ShoppingActions from '../../state/actions/shopping.actions';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  constructor(private store: Store<Shopping>) {}
  private unSubscriber$ = new Subject<void>();
  customerRef: string;

  ngOnInit(): void {
    this.store
      .select(ShoppingSelect.selectLoginInformation)
      .pipe(takeUntil(this.unSubscriber$))
      .subscribe((customer) => {
        if (customer) {
          this.customerRef = customer.userId;
          this.store.dispatch(
            ShoppingActions.getUserDetailsShipmentsInit({
              customerRef: this.customerRef,
            })
          );
        }
      });
  }


  ngOnDestroy() {
    this.unSubscriber$.next();
    this.unSubscriber$.complete()
  }
}
