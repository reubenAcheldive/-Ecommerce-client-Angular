import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'store',
        loadChildren: () =>
          import('../dashboard/store/store.module').then((m) => m.StoreModule),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('../../components/dashboard/order/order.module').then(
            (m) => m.OrderModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
