import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as shoppingActions from '../../../state/actions/shopping.actions';
import * as ShoppingSelectors from '../../../state/selectors/shopping-selectors';
import { Shopping } from '../../../state/reducers/index';
import { SidenavService } from 'src/app/services/sidenave/sidenav.service';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { IUserInformation } from '../../../InterfaceModal/userInformation';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();
  public createNewProduct: boolean = false;
  public categories$? = this.store.select(ShoppingSelectors.selectCategories);
  showFiller = false;
  public loading$ = true;
  public opened = false;
  public openSidebarSub: Subscription;
  public sidenav: MatSidenav;
  public drawer: MatDrawer;
  isAdmin: boolean;

  constructor(
    private router: Router,
    private store: Store<Shopping>,
    private sideNav: SidenavService
  ) {}
  product = new FormControl('');
  ngOnInit(): void {
    this.store.dispatch(shoppingActions.fetchCategories());
    this.sideNav.openSidebar.subscribe((open) => {
      this.opened = open;
    });
    this.store
      .select(ShoppingSelectors.selectLoginInformation)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((info) => {
        if (info) {
          this.isAdmin = info.isAdmin;
        }
      });
    this.store
      .select(ShoppingSelectors.selectLoading)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((loading) => (this.loading$ = loading));
      console.log(this.loading$);

  }

  SearchProductByName(str: string) {
    if (str) console.log({ str });

    this.store.dispatch(shoppingActions.fetchSingleProductsBySearch({ str }));
    this.router.navigate(['/store']);
  }

  createNewProductHandel() {

    this.createNewProduct = !this.createNewProduct;
  
  }

  ngOnDestroy() {
    this.unsubscribe$.complete();
    this.unsubscribe$.next();
  }
}
