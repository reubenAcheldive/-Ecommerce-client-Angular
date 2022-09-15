import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { selectAuthDetails } from 'src/app/state/selectors/auth-selectors';
import { MatMenuPanel } from '@angular/material/menu';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(public dialog: MatDialog, private store: Store) {}
  userData = this.store.select(selectAuthDetails);
  ngOnInit(): void {
    this.openDialog();
  }
  openDialog() {
    this.dialog.open(AuthenticationComponent, {
      width: '55%',
      height: '90%',
    });
  }
}
