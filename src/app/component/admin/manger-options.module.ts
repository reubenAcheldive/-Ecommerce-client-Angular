import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerOptionsComponent } from './manager-options.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CreateNewProductModalComponent } from './create-new-product-modal/create-product-modal.component';
import { EditProductModalComponent } from './edit-product-modal/edit-product-modal.component';

@NgModule({
  declarations: [

    ManagerOptionsComponent,
    CreateNewProductModalComponent,
    EditProductModalComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
   
   
  ],
  exports: [ManagerOptionsComponent],
})
export class managerOptions {}
