import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Shopping } from 'src/app/state/reducers';
import { selectCategories } from '../../../state/selectors/shopping-selectors';
import { fetchCategories } from '../../../state/actions/shopping.actions';
import { Categories } from 'src/app/Interfaces/categories';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavComponent implements OnInit {
  constructor(private store: Store<Shopping>, private route: ActivatedRoute) {}
  categories: Observable<Categories[]> = this.store.select(selectCategories);

  ngOnInit(): void {
    this.store.dispatch(fetchCategories());
    console.log(this.route.snapshot.params['categoryRef']);
  }

  getCategoryId(category: any) {
    console.log(category);
  }
}
