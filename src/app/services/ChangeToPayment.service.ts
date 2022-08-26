import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'platform',
})
export class ChangeToPayment {
  constructor() {}
  isCanToOrder = new BehaviorSubject<boolean>(true);
}
