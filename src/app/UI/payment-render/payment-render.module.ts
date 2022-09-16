import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRenderComponent } from './payment-render.component';
import { IconInfoModule } from 'src/app/UI/icon-info/icon-info.module';

@NgModule({
  declarations: [PaymentRenderComponent],
  imports: [CommonModule, IconInfoModule],
  exports: [PaymentRenderComponent],
})
export class PaymentRenderModule {}
