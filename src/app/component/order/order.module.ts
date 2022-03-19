import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from './order.component';
import { ListCartComponent } from './list-cart/list-cart.component';
import { FormOrderComponent } from './form-order/form-order.component';
import { OrderPageRoutingModule } from './order-page-routing.module';
import { MatTableModule } from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { InvoiceComponent } from './invoice/invoice.component';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

const MaterielComponent = [
  MatTableModule,
  MatIconModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatNativeDateModule,
  MatListModule,
  MatButtonModule,
];
@NgModule({
  declarations: [OrderComponent, ListCartComponent, FormOrderComponent, InvoiceComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderPageRoutingModule,
    HttpClientModule,
    MaterielComponent,
  ],
  exports: [OrderComponent],
})
export class OrderModule {}
