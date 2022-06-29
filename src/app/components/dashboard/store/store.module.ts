import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { CatagoriesComponent } from './catagories/catagories.component';
import { ProductsComponent } from './products/products.component';
import { MatCardModule } from '@angular/material/card';
import { AddProductAmountComponent } from './add-product-amount/add-product-amount.component';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [
    StoreComponent,
    CatagoriesComponent,
    ProductsComponent,
    AddProductAmountComponent,
  ],
  imports: [CommonModule, StoreRoutingModule, MatCardModule, MatToolbarModule],
  exports:[AddProductAmountComponent]
})
export class StoreModule {}
