import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CartModule } from './cart/cart.module';
import { NavCheckoutModule } from './order/checkout/nav-checkout/nav-checkout.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, MatToolbarModule,MatSidenavModule,CartModule,NavCheckoutModule],
})
export class DashboardModule {}
