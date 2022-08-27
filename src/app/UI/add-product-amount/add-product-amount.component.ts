import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/Interfaces/Products';
import { initUpdateItemQuantityInCart } from 'src/app/state/actions/shopping.actions';

@Component({
  selector: 'app-add-product-amount',
  templateUrl: './add-product-amount.component.html',
  styleUrls: ['./add-product-amount.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductAmountComponent {
  @Input()
  public amount: number = 0;
@HostBinding("class")
public readonly classList ="auth"
  @Output()
  public quantityChange: EventEmitter<number> = new EventEmitter();

  constructor(private store: Store) {}

  public increment(): void {
    this.amount += 1;
    this.quantityChange.emit(this.amount);


    //this.dispatchUpdateAction(this._item);
  }

  public decrement() {
    if (this.amount > 0) {
      this.amount -= 1;
      this.quantityChange.emit(this.amount);

      //this.dispatchUpdateAction(this._item);
    }
  }

  private dispatchUpdateAction(product: IProduct): void {
    this.store.dispatch(
      initUpdateItemQuantityInCart({
        itemUpdate: {
          productRefId: product._id,
          quantity: this.amount,
          idCart: '62bc60407a0a29c9f3c77b31',
        },
      })
    );
  }
}
