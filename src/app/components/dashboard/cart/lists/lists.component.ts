import { CartResponseForUser } from './../../../../Interfaces/GetCartUser';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  @Input() cartList:CartResponseForUser;
  constructor() {}

  ngOnInit(): void {
   console.log({cartList:this.cartList});

  }
}
