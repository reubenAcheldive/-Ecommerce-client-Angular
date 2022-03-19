import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Categories } from 'src/app/InterfaceModal/categories';
import { IProduct } from 'src/app/InterfaceModal/Products';
import { Shopping } from 'src/app/state/reducers';
import * as shoppingSelector from '../../../state/selectors/shopping-selectors';
import * as shoppingAction from '../../../state/actions/shopping.actions';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.css'],
})
export class EditProductModalComponent implements OnInit {
  constructor(
    private store: Store<Shopping>,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}
  singleProductEdit$?: IProduct;
  openSideNav = true;
  private readonly unSubscriber$ = new Subject<void>();
  public categories$?: Observable<Categories[] | null> = this.store.select(
    shoppingSelector.selectCategories
  );

  public editFormHandel!: FormGroup;

  ngOnInit(): void {
    this.store
      .select(shoppingSelector.selectProductEditByAdmin)
      .pipe(takeUntil(this.unSubscriber$))
      .subscribe((product) => {
        if (product) {
          this.singleProductEdit$ = product;

          this.createForm();
        }
      });
  }

  public get categoryId(): string {
    return this.editFormHandel.get('categoryRef')?.value;
  }

  private createForm(): void {
    this.editFormHandel = this.fb.group({
      id: [this.singleProductEdit$?.id],
      name: [this.singleProductEdit$?.name, [, Validators.required]],
      categoryRef: [this.singleProductEdit$?.categoryRef, Validators.required],
      price: [
        this.singleProductEdit$?.price,
        [Validators.required, Validators.min(1)],
      ],
      imgUrl: [this.singleProductEdit$?.imgUrl, [, Validators.required]],
      description: [this.singleProductEdit$?.description, Validators.required],
    });
  }

  onSave(): void {
    const editedProduct = this.editFormHandel.value as IProduct;
    if (!this.editFormHandel.invalid) {
      this.store.dispatch(
        shoppingAction.productEditByAdminSuccess({ product: editedProduct })
      );
      this.dialogRef.close();
    }
  }
  get name() {
    return this.editFormHandel.get('name');
  }
  get categoryRef() {
    return this.editFormHandel.get('categoryRef');
  }
  get description() {
    return this.editFormHandel.get('description');
  }
  get price() {
    return this.editFormHandel.get('price');
  }
  get imgUrl() {
    return this.editFormHandel.get('imgUrl');
  }

  ngOnDestroy() {
    this.unSubscriber$.next();
    this.unSubscriber$.complete();
  }
}
