import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { selectAuthDetails } from 'src/app/state/selectors/auth-selectors';
import { MatMenuPanel } from '@angular/material/menu';
import { IUser } from 'src/app/Interfaces/auth/userInformation';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(public dialog: MatDialog, private store: Store) {}
  userDate: IUser;
  ngOnInit(): void {
    this.store.select(selectAuthDetails).subscribe((data) => {
      this.userDate = data;
    });
  }
  openDialog() {
    this.dialog.open(AuthenticationComponent, {
      width: '55%',
      height: '90%',
    });
  }


}
