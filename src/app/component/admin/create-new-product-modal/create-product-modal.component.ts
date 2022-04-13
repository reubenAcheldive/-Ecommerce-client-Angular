import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Categories } from 'src/app/Interfaces/categories';
import { Shopping } from 'src/app/state/reducers';

import * as ShoppingSelector from '../../../state/selectors/shopping-selectors';

import { CreateNewProduct } from 'src/app/Interfaces/CreateNewProduct';
@Component({
  selector: 'app-create-new-product-modal',
  templateUrl: './create-product-modal.component.html',
  styleUrls: ['./create-product-modal.component.css'],
})
export class CreateNewProductModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateNewProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<Shopping>,
    private fb: FormBuilder
  ) {}

  private readonly unSubscriber$ = new Subject<void>();
  public categories$?: Observable<Categories[] | null> = this.store.select(
    ShoppingSelector.selectCategories
  );

  public createProductForm!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.createProductForm = this.fb.group({
      name: [, Validators.required],
      categoryRef: ['', Validators.required],
      price: [1, [Validators.required, Validators.min(1)]],
      imgUrl: [
        null,
        [, Validators.required]
      ],
      description: ['', Validators.required],
    });
  }

  onSave(): void {
    const payload = this.createProductForm.value as CreateNewProduct;

    if (!this.createProductForm.invalid) {
      this.dialogRef.close([payload]);
    }
  }
  get name() {
    return this.createProductForm.get('name');
  }
  get categoryRef() {
    return this.createProductForm.get('categoryRef');
  }
  get description() {
    return this.createProductForm.get('description');
  }
  get price() {
    return this.createProductForm.get('price');
  }
  get imgUrl() {
    return this.createProductForm.get('imgUrl');
  }

  ngOnDestroy() {
    this.unSubscriber$.next();
    this.unSubscriber$.complete();
  }
}
