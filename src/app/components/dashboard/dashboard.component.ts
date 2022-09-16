import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChangeToPayment } from 'src/app/services/ChangeToPayment.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private changeToPayment: ChangeToPayment) {}
  public get isCanToOrder() {
    return this.changeToPayment.isCanToOrder.value;
  }
  showFiller = true;
}
