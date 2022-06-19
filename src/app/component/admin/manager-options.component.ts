import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { IProduct } from 'src/app/Interfaces/Products';

import * as ShoppingActions from '../../state/actions/shopping.actions';
import { EditProductModalComponent } from './edit-product-modal/edit-product-modal.component';
@Component({
  selector: 'app-manager-options',
  templateUrl: './manager-options.component.html',
  styleUrls: ['./manager-options.component.css'],
})
export class ManagerOptionsComponent implements OnInit {

  @Input() product!: IProduct;



  unSubscriber$ = new Subject<void>();

  constructor(public dialog: MatDialog, private store: Store ) {}
  editProduct() {
    this.store.dispatch(ShoppingActions.productEditByAdminInit({ product:this.product}))


    const dialogRef = this.dialog.open(EditProductModalComponent,{data:1});
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unSubscriber$))
      .subscribe((result  ) => {
        this.store.dispatch(
          ShoppingActions.productEditByAdminSuccess({ product: result })
        );

    console.log(1,result);

      })
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.unSubscriber$.next()
    this.unSubscriber$.complete()
  }




}
