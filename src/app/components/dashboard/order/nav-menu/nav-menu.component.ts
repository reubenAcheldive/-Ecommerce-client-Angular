import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/Interfaces/auth/userInformation';
import { selectAuthDetails } from '../../../../state/selectors/auth-selectors';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
  constructor(private store: Store) {}
  getUserDetails$: Observable<IUser>;
  ngOnInit(): void {
    this.getUserDetails$ = this.store.select(selectAuthDetails);
  }
}
