import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { MatCardModule } from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge'
import { MatIconModule } from '@angular/material/icon';
import {RouterModule} from '@angular/router'
import {MatListModule} from '@angular/material/list';
import { ListsComponent } from './lists/lists.component';
import { AddProductAmountModule } from 'src/app/UI/add-product-amount/add-product-amount.module';
import { MatButtonModule } from '@angular/material/button';
import { IconInfoModule } from 'src/app/UI/icon-info/icon-info.module';
import { GoToPaymentComponent } from './go-to-payment/go-to-payment.component';
@NgModule({
  declarations: [CartComponent, ListsComponent, GoToPaymentComponent],
  imports: [CommonModule,RouterModule, MatCardModule, MatIconModule,MatListModule,MatBadgeModule,AddProductAmountModule,MatButtonModule,IconInfoModule],
  exports: [CartComponent],
})
export class CartModule {}
