import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nav-dialog-modal',
  templateUrl: './nav-dialog-modal.component.html',
  styleUrls: ['./nav-dialog-modal.component.css'],
})
export class NavDialogModalComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}
}
