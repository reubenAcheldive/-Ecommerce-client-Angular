import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentNameComponent } from 'src/app/UI/content-name/content-name.component';

@Component({
  selector: 'app-nav-checkout',
  templateUrl: './nav-checkout.component.html',
  styleUrls: ['./nav-checkout.component.css'],
})
export class NavCheckoutComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openDialog();
  }
  openDialog(): void {
    this.dialog.open(ContentNameComponent, {
      width: 'auto',
      height: 'auto',
    });
  }
}
