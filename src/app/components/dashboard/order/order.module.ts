import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { IconInfoModule } from 'src/app/UI/icon-info/icon-info.module';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    OrderComponent,
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    IconInfoModule,
    MatButtonModule,
    MatListModule
  ]
})
export class OrderModule { }
