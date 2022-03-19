import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AddProductComponent } from './add-product/add-product.component';
import { ShopStoreRoutingModule } from './shop-store-routing.module';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { navCartComponent } from './cartList/navCart.component';
import { managerOptions } from '../admin/manger-options.module';
import { FormNewProductComponent } from '../admin/create-new-product/create-new-product.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    navCartComponent,
    CategoryComponent,
    ProductsComponent,
    AddProductComponent,

    FormNewProductComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShopStoreRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatSidenavModule,
    managerOptions,
    RouterModule,
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
})
export class ShopStoreModule {}
