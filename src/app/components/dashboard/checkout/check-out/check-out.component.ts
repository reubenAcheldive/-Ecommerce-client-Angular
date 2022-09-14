import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/Interfaces/cart/GetCartUser';
import { Categories } from 'src/app/Interfaces/categories';
import { fetchCategories } from 'src/app/state/actions/shopping.actions';
import {
  selectCartList,
  selectCategories,
} from 'src/app/state/selectors/shopping-selectors';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent implements OnInit {
  constructor(private store: Store) {}
  fetchCategories$: Observable<Categories[]> =
    this.store.select(selectCategories);
  getCart: Observable<Cart> = this.store.select(selectCartList);

  ngOnInit(): void {
    this.store.dispatch(fetchCategories());
  }
}
