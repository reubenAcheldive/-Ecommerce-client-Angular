import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,

  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-add-product-amount',
  templateUrl: './add-product-amount.component.html',
  styleUrls: ['./add-product-amount.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductAmountComponent {
  @Input()
  public amount: number = 0;
  @HostBinding('class')
  public readonly classList = 'auth';
  @Output()
  public quantityChange: EventEmitter<number> = new EventEmitter();

  constructor(private store: Store) {}

  public increment(): void {
    this.amount += 1;
    this.quantityChange.emit(this.amount);
    console.log(this.amount);


  }

  public decrement() {
    if (this.amount > 0) {
      this.amount -= 1;
      this.quantityChange.emit(this.amount);


    }
  }


}
