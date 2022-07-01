import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
  },
  {
    path: '',
    component: StoreComponent,
    children: [
      {
        path: ':category',
        component: ProductsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
