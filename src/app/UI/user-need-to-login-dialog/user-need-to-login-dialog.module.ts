import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNeedToLoginDialogComponent } from './user-need-to-login-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [UserNeedToLoginDialogComponent],
  imports: [CommonModule,MatDialogModule,MatButtonModule,MatListModule],
  exports: [UserNeedToLoginDialogComponent],
})
export class UserNeedToLoginDialogModule {}
