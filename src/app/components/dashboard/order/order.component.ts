import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/Interfaces/categories';
import { fetchCategories } from 'src/app/state/actions/shopping.actions';
import { Shopping } from 'src/app/state/reducers';
import { selectCategories } from 'src/app/state/selectors/shopping-selectors';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  constructor(private store: Store<Shopping>) {}
  fetchCategories$: Observable<Categories[]> =
    this.store.select(selectCategories);
  ngOnInit(): void {
    this.store.dispatch(fetchCategories());
  }
}
