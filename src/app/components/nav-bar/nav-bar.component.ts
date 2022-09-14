import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { selectAuthDetails } from 'src/app/state/selectors/auth-selectors';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(public dialog: MatDialog, private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectAuthDetails).subscribe((data) => {
      if (!data) {
        this.openDialog();
      }
    });
  }
  openDialog() {
    let dialogRef = this.dialog.open(AuthenticationComponent, {
      height: '500px',
    });
  }
}
