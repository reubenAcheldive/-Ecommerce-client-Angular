import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-content-name',
  templateUrl: './content-name.component.html',
  styleUrls: ['./content-name.component.css'],
})
export class ContentNameComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ContentNameComponent>) {}

  ngOnInit(): void {}
  onClose(): void {
    this.dialogRef.close();
  }
}
