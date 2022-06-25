import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Categories} from 'src/app/Interfaces/categories';
import {Shopping} from 'src/app/state/reducers';
import {fetchCategories} from "../../../state/actions/shopping.actions"
import {selectCategories} from "../../../state/selectors/shopping-selectors"
@Component({selector: 'app-store', templateUrl: './store.component.html', styleUrls: ['./store.component.css']})
export class StoreComponent implements OnInit {

    constructor(private store : Store < Shopping >) {}

    fetchCategories$ : Categories[];

    ngOnInit(): void {
        this.store.dispatch(fetchCategories())
        this.store.select(selectCategories).subscribe((categories) => this.fetchCategories$ = categories)


    }

}
