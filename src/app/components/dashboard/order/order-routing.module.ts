import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsResolver } from 'src/app/resolvers/user-details.resolver';
import { AddressManagementComponent } from './nav-menu/address-management/address-management.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { OrdersCustomerComponent } from './nav-menu/orders-customer/orders-customer.component';
import { PaymentsComponent } from './nav-menu/payments/payments.component';
import { UserDetailsComponent } from './nav-menu/user-details/user-details.component';
import { OrderComponent } from './order.component';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      {
        path: '',
        component: NavMenuComponent,
        resolve: {userDetails: UserDetailsResolver},
        children: [
          {
            path: '',
            component: UserDetailsComponent,

          },
          {
            path: 'addresses',
            component: AddressManagementComponent,
          },
          {
            path: 'payments',
            component: PaymentsComponent,
          },
          {
            path: 'orders',
            component: OrdersCustomerComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
