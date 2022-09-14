import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentNameComponent } from 'src/app/UI/content-name/content-name.component';
import { RenderCatListComponent } from '../render-cat-list/render-cat-list.component';
import { Store } from '@ngrx/store';
import { selectCartList } from 'src/app/state/selectors/shopping-selectors';
import { map, Observable, takeUntil, tap, Subject } from 'rxjs';
import { Cart } from 'src/app/Interfaces/cart/GetCartUser';

@Component({
  selector: 'app-nav-checkout',
  templateUrl: './nav-checkout.component.html',
  styleUrls: ['./nav-checkout.component.css'],
})
export class NavCheckoutComponent implements OnInit {
  unsubscribed$ = new Subject<void>();
  constructor(public dialog: MatDialog, private store: Store) {}
  @Input() getCart: Cart;
  ngOnInit(): void {

  }
  openDialogContentComponent(): void {
    this.dialog.open(ContentNameComponent, {
      width: 'auto',
      height: 'auto',
    });
  }
  openCartListDialog(): void {
    this.dialog.open(RenderCatListComponent, {
      width: '65%',
      height: 'auto',

    });
  }
  onDestroy(): void {
    this.unsubscribed$.next();
    this.unsubscribed$.complete();
  }
}
