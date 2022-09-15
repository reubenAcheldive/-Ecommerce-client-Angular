import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TogglePageService {
  constructor() {}
  private toggle = new BehaviorSubject<boolean>(false);

  handleWithChangeBetweenForms() {
    this.toggle.next(!this.toggle.value);

  }
  get toggleStatus() {
    return this.toggle;
  }
}
