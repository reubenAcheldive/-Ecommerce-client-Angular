import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckOutRoutingModule } from './check-out-routing.module';
import { CheckOutComponent } from './check-out.component';
import { StoreModule } from '../../store/store.module';

import { LinksNavModule } from 'src/app/UI/links-nav/links-nav.module';
import { NavCheckoutModule } from './nav-checkout/nav-checkout.module';



@NgModule({
  declarations: [
    CheckOutComponent
  ],
  imports: [
    CommonModule,
    CheckOutRoutingModule,
    StoreModule,
    LinksNavModule,
    NavCheckoutModule
  ]
})
export class CheckOutModule { }
