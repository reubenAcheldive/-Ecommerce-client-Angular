import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  Subject, Subscription, takeUntil } from 'rxjs';
import { IUserInformation } from 'src/app/InterfaceModal/userInformation';
import { AuthService } from 'src/app/services/auth.service';
import { SidenavService } from 'src/app/services/sidenave/sidenav.service';
import { Shopping } from 'src/app/state/reducers';
import * as UserAuth from '../../state/selectors/shopping-selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private store: Store<Shopping>, private auth: AuthService,private sidenav:SidenavService) {}
  private unSubscriber$ = new Subject<void>();
   userInformation: IUserInformation;
  openCart: boolean = false;
  sideNavSub:Subscription
  ngOnInit(): void {
    this.store
      .select(UserAuth.selectLoginInformation).pipe(takeUntil(this.unSubscriber$))
      .pipe()
      .subscribe((user) => (this.userInformation = user));

  }
  showSideNave(){
    this.sidenav.openSidebar.next(this.openCart);
    this.openCart = !this.openCart
  }
  logOut() {
    this.auth.logOut();
  }
  ngOnDestroy() {
    this.unSubscriber$.next()
    this.unSubscriber$.complete();
  }
}
