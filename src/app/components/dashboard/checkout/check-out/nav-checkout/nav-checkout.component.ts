import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentNameComponent } from 'src/app/UI/content-name/content-name.component';
import { RenderCatListComponent } from '../render-cat-list/render-cat-list.component';

@Component({
  selector: 'app-nav-checkout',
  templateUrl: './nav-checkout.component.html',
  styleUrls: ['./nav-checkout.component.css'],
})
export class NavCheckoutComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openPaymentDialog();
  }
  openDialogContentComponent(): void {
    this.dialog.open(ContentNameComponent, {
      width: 'auto',
      height: 'auto',
    });
  }
  openPaymentDialog(): void {
    this.dialog.open(RenderCatListComponent, {
      width: '65%',
      height: 'auto',
    });
  }
}
