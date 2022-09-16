import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-need-to-login-dialog',
  templateUrl: './user-need-to-login-dialog.component.html',
  styleUrls: ['./user-need-to-login-dialog.component.css']
})
export class UserNeedToLoginDialogComponent implements OnInit {

  constructor(  public dialogRef: MatDialogRef<UserNeedToLoginDialogComponent>) { }

  ngOnInit(): void {
  }

}
