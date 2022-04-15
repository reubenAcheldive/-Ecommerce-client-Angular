import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProductsComponent } from './top-nav/products/products.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { TopNavModule } from './top-nav/top-nav.module';

const routes: Routes = [
  {
    path: '',
    component: TopNavComponent,
  },
  {
    path: 'category/:categoryRef',
    component: TopNavComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
