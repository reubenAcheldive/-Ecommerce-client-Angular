import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavMenuRoutingModule } from './nav-menu-routing.module';
import { IconInfoModule } from 'src/app/UI/icon-info/icon-info.module';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AddressManagementComponent } from './address-management/address-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavMenuComponent } from './nav-menu.component';
import { LinksNavModule } from 'src/app/UI/links-nav/links-nav.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentDialogModule } from 'src/app/UI/payment-dialog/payment-dialog.module';

@NgModule({
  declarations: [
    AddressManagementComponent,
    NavMenuComponent,
    UserDetailsComponent,
    PaymentsComponent,
  ],
  imports: [
    CommonModule,
    NavMenuRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IconInfoModule,
    MatCardModule,
    RouterModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,

    LinksNavModule,
    MatFormFieldModule,
    MatInputModule,
    PaymentDialogModule,
  ],
  exports: [NavMenuComponent],
})
export class NavMenuModule {}
