import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckOutRoutingModule } from './check-out-routing.module';
import { CheckOutComponent } from './check-out.component';

import { LinksNavModule } from 'src/app/UI/links-nav/links-nav.module';
import { NavCheckoutModule } from './nav-checkout/nav-checkout.module';
import { MatDialogModule } from '@angular/material/dialog';
import { RenderCatListComponent } from './render-cat-list/render-cat-list.component';
import { CatagoriesModule } from 'src/app/components/dashboard/store/catagories/catagories.module';
import { AddProductAmountModule } from 'src/app/UI/add-product-amount/add-product-amount.module';
@NgModule({
  declarations: [CheckOutComponent, RenderCatListComponent],
  imports: [
    CommonModule,
    CheckOutRoutingModule,

    LinksNavModule,
    NavCheckoutModule,
    MatDialogModule,
    CatagoriesModule,
    AddProductAmountModule,
  ],
})
export class CheckOutModule {}
