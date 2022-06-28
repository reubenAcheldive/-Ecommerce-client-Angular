import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { MatCardModule } from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge'
import { MatIconModule } from '@angular/material/icon';
import { IconInfoComponent } from './icon-info/icon-info.component';
import {MatListModule} from '@angular/material/list';
import { ListsComponent } from './lists/lists.component';
import { ButtonQuantityComponent } from './button-quantity/button-quantity.component';
@NgModule({
  declarations: [CartComponent, IconInfoComponent, ListsComponent, ButtonQuantityComponent],
  imports: [CommonModule, MatCardModule, MatIconModule,MatListModule,MatBadgeModule],
  exports: [CartComponent],
})
export class CartModule {}
