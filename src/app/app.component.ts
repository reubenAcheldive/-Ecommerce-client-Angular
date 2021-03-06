import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from './services/Auth/auth.service';

import { getCartByCartIdInit } from './state/actions/shopping.actions';

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
    this.store.dispatch(
      getCartByCartIdInit({ cartId: '62bc60407a0a29c9f3c77b31' })
    );
    this.AuthService.AutoCheckJwt();
  }
}
