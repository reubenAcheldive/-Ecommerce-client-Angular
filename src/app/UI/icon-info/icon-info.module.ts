import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconInfoComponent } from './icon-info.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [IconInfoComponent],
  imports: [CommonModule,MatIconModule],
  exports: [IconInfoComponent],
})
export class IconInfoModule {}
