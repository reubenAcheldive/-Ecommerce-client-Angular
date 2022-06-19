import { Component, OnInit, Inject, OnDestroy, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProduct } from 'src/app/Interfaces/Products';
import { SidenavService } from 'src/app/services/sidenave/sidenav.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public product: IProduct,
   private sidenav:SidenavService
    
  ) {}
 
  
  amountControl: number = 1;

  ngOnInit(): void {
    
  
  }
  save(product: IProduct) {
    this.sidenav.openSidebar.next(true)
    this.dialogRef.close([this.amountControl, product]);
  }
  increment() {
    this.amountControl++;
  }

  decrement() {
    if (this.amountControl === 1) return;
    this.amountControl--;
  }
 
}
