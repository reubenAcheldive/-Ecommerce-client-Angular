import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';

import * as ShoppingActions from '../../../state/actions/shopping.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { CreateNewProductModalComponent } from '../create-new-product-modal/create-product-modal.component';

@Component({
  selector: 'app-form-new-product',
  templateUrl: './create-new-product.component.html',
  styleUrls: ['./create-new-product.component.css'],
})
export class FormNewProductComponent implements OnInit {
  unSubscriber$ = new Subject<void>();

  constructor(public dialog: MatDialog, private store: Store , private router: Router) {}
  openDialog() {


    const dialogRef = this.dialog.open(CreateNewProductModalComponent, {});
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unSubscriber$))
      .subscribe((result  ) => {
      if(!result) return
      

        this.store.dispatch(
          ShoppingActions.AddNewProductByAdminInit({ payload: result[0] })
        );
        this.router.navigate([`store/category/${result[0].categoryRef}`]);
      });
  }

  ngOnInit() {}
  ngOnDestroy(){
    this.unSubscriber$.next()
    this.unSubscriber$.complete()
  }
}
