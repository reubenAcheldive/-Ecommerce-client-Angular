import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { CatagoriesComponent } from './catagories/catagories.component';
import { ProductsComponent } from './products/products.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddProductAmountModule } from 'src/app/UI/add-product-amount/add-product-amount.module';
@NgModule({
  declarations: [StoreComponent, CatagoriesComponent, ProductsComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MatCardModule,
    MatToolbarModule,
    AddProductAmountModule,
  ],
  exports: [],
})
export class StoreModule {}
