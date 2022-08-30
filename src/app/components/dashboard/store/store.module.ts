import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { CatagoriesComponent } from './catagories/catagories.component';
import { ProductsComponent } from './products/products.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddProductAmountModule } from 'src/app/UI/add-product-amount/add-product-amount.module';
import { CartModule } from '../cart/cart.module';
@NgModule({
  declarations: [StoreComponent, CatagoriesComponent, ProductsComponent],
  imports: [

  CommonModule,
    StoreRoutingModule,
    RouterModule,
    MatCardModule,
    MatToolbarModule,
    AddProductAmountModule,
    CartModule,
  ],
  exports: [CatagoriesComponent],
})
export class StoreModule {}
