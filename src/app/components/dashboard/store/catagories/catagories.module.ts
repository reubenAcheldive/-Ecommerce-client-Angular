import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatagoriesComponent } from './catagories.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CatagoriesComponent],
  imports: [CommonModule, RouterModule],
  exports: [CatagoriesComponent],
})
export class CatagoriesModule {}
