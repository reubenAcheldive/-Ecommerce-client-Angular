import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckOutRoutingModule } from './check-out-routing.module';
import { CheckOutComponent } from './check-out.component';
import { StoreModule } from '../../store/store.module';

import { LinksNavModule } from 'src/app/UI/links-nav/links-nav.module';
import { NavCheckoutModule } from './nav-checkout/nav-checkout.module';
import { MatDialogModule } from '@angular/material/dialog';
import { RenderCatListComponent } from './render-cat-list/render-cat-list.component';



@NgModule({
  declarations: [
    CheckOutComponent,
    RenderCatListComponent
  ],
  imports: [
    CommonModule,
    CheckOutRoutingModule,
    StoreModule,
    LinksNavModule,
    NavCheckoutModule,
    MatDialogModule
  ]
})
export class CheckOutModule { }
