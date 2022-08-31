import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';

import { ProductsComponent } from './products/products.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddProductAmountModule } from 'src/app/UI/add-product-amount/add-product-amount.module';
import { CartModule } from '../cart/cart.module';
import { CatagoriesModule } from 'src/app/UI/catagories/catagories.module';
@NgModule({
  declarations: [StoreComponent, ProductsComponent],
  imports: [

  CommonModule,
    StoreRoutingModule,
    RouterModule,
    MatCardModule,
    MatToolbarModule,
    AddProductAmountModule,
    CartModule,
    CatagoriesModule
  ],
  exports: [],
})
export class StoreModule {}
