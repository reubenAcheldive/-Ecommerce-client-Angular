import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksNavComponent } from './links-nav.component';
import { IconInfoModule } from '../icon-info/icon-info.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LinksNavComponent],
  imports: [CommonModule, IconInfoModule, RouterModule],

  exports: [LinksNavComponent],
})
export class LinksNavModule {}
