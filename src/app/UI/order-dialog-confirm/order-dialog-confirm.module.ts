import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDialogConfirmComponent } from './order-dialog-confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PaymentRenderModule } from '../payment-render/payment-render.module';
import { IconInfoModule } from '../icon-info/icon-info.module';

import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrderDialogConfirmComponent],
  imports: [
    CommonModule,
    FormsModule,
     MatDialogModule,
    MatButtonModule,
    PaymentRenderModule,
    IconInfoModule,
    MatSelectModule
  ],
  exports: [OrderDialogConfirmComponent],
})
export class OrderDialogConfirmModule {}
