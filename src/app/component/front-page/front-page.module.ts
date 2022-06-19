import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontPageRoutingModule } from './front-page-routing.module';
import { FrontPageComponent } from './front-page.component';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {  MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FrontPageComponent],
  imports: [
    CommonModule,
    FrontPageRoutingModule,
    MatDividerModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,

  ],
})
export class FrontDoorModule {}
