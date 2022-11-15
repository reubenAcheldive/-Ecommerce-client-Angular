import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavCheckoutComponent } from './nav-checkout.component';
import { IconInfoModule } from 'src/app/UI/icon-info/icon-info.module';
import {MatDialogModule} from '@angular/material/dialog';
import { OrderDialogConfirmModule } from 'src/app/UI/order-dialog-confirm/order-dialog-confirm.module';

@NgModule({
  declarations: [NavCheckoutComponent],
  imports: [CommonModule,MatDialogModule, IconInfoModule,OrderDialogConfirmModule],
  exports: [NavCheckoutComponent],
})
export class NavCheckoutModule {}
