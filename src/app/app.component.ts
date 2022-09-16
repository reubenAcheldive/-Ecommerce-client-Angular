import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from './services/Auth/auth.service';

import { getCartByCartIdInit } from './state/actions/shopping.actions';
import { selectAuthDetails } from './state/selectors/auth-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private store: Store,
    private AuthService: AuthService
  ) {}

  ngOnInit(): void {
    this.AuthService.AutoCheckJwt();
    this.store.select(selectAuthDetails).subscribe((authDetails) => {
      authDetails &&
        this.store.dispatch(
          getCartByCartIdInit({ cartId: authDetails.userId })
        );
    });
  }
}
