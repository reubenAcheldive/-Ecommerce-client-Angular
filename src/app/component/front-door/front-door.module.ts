import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontDoorRoutingModule } from './front-door-routing.module';
import { FrontDoorComponent } from './front-door.component';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {  MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FrontDoorComponent],
  imports: [
    CommonModule,
    FrontDoorRoutingModule,
    MatDividerModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,

  ],
})
export class FrontDoorModule {}
