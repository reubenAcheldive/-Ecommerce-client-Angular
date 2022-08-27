import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavCheckoutComponent } from './nav-checkout.component';
import { IconInfoModule } from 'src/app/UI/icon-info/icon-info.module';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [NavCheckoutComponent],
  imports: [CommonModule,MatDialogModule, IconInfoModule],
  exports: [NavCheckoutComponent],
})
export class NavCheckoutModule {}
