import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from './services/auth.service';
import {} from './state/actions/user.actions';
import { selectLoginInformation } from './state/selectors/shopping-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store
  ) {}
  ngOnInit(): void {
    this.auth.AutoCheckJwt();
   

    // this.router.navigateByUrl("/register")
  }
}
