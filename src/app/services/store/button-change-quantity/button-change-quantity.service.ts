import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonChangeQuantityService {

  constructor() { }
  amount = new  Subject<number>();

  increment() {
    let num =0
    this.amount.next(1);
  }
  decrement() {
    this.amount.next(-1);
  }
}
