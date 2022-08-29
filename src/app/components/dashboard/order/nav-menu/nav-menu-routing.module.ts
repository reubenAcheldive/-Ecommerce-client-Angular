import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetPaymentsResolver } from 'src/app/resolvers/get-payments.resolver';
import { UserDetailsResolver } from 'src/app/resolvers/user-details.resolver';
import { AddressManagementComponent } from './address-management/address-management.component';
import { NavMenuComponent } from './nav-menu.component';
import { OrdersCustomerComponent } from './orders-customer/orders-customer.component';
import { PaymentsComponent } from './payments/payments.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: NavMenuComponent,

    children: [
      {
        path: '',
        component: UserDetailsComponent,
        resolve: { userDetails: UserDetailsResolver },
      },
      {
        path: 'addresses',
        component: AddressManagementComponent,
      },
      {
        path: 'payments',
        component: PaymentsComponent,
        resolve: {
          userDetails: UserDetailsResolver,
          payments: GetPaymentsResolver,
        },

      },
      {
        path: 'orders',
        component: OrdersCustomerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavMenuRoutingModule {}
