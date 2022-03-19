import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule,RouterModule, MatToolbarModule, MatGridListModule,MatButtonModule,ReactiveFormsModule,MatIconModule,MatCardModule ],
  exports:[NavbarComponent]
})
export class NavbarModule {}
