import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { IconInfoModule } from 'src/app/UI/icon-info/icon-info.module';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { UserDetailsComponent } from './nav-menu/user-details/user-details.component';
import { AddressManagementComponent } from './nav-menu/address-management/address-management.component';
import { PaymentsComponent } from './nav-menu/payments/payments.component';
import { OrdersCustomerComponent } from './nav-menu/orders-customer/orders-customer.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    OrderComponent,
    NavMenuComponent,
    UserDetailsComponent,
    AddressManagementComponent,
    PaymentsComponent,
    OrdersCustomerComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IconInfoModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class OrderModule {}
