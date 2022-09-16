import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/Interfaces/auth/userInformation';
import { logOut } from 'src/app/state/actions/shopping.actions';

@Component({
  selector: 'app-links-nav',
  templateUrl: './links-nav.component.html',
  styleUrls: ['./links-nav.component.css'],
})
export class LinksNavComponent implements OnInit {
  @Input() userData!: IUser;
  constructor(private store: Store) {}

  ngOnInit(): void {}
  logOut() {
    localStorage.removeItem('jwt');
    this.store.dispatch(logOut())

  }
}
