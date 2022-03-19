import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Shopping } from 'src/app/state/reducers';
import * as ShoppingSelectors from '../../../state/selectors/shopping-selectors';
import { loginInit } from '../../../state/actions/user.actions';
import * as shoppingCartAction from '../../../state/actions/shopping.actions';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoadingSub: Subscription;
  loading: boolean = false;
  showAlert: { message: string; status: boolean } = {
    message: '',
    status: true,
  };
  constructor(private store: Store<Shopping>, private route: Router) {}
  hide = false;

  loginInformation: Subscription;
  private readonly unSubscribe$ = new Subject<void>();
  ngOnInit(): void {}
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
    ]),
  });
  async onSubmit() {
    console.log(this.loading, '0');
    this.loading = true;
    console.log(this.loading, '1');

    const { email, password } = this.loginForm.value;
    this.store.dispatch(loginInit({ userName: email, password }));
    this.loginInformation = this.store
      .select(ShoppingSelectors.selectLoginInformation)
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe((result) => {
        if (!result) {
          this.store
            .select(ShoppingSelectors.selectErrorAlert)
            .pipe(takeUntil(this.unSubscribe$))
            .subscribe((showAlert) => {
              console.log(this.loading, '2');

              console.log(this.loading, '3');
              if (showAlert) {
                console.log(showAlert);

                this.showAlert = showAlert;
                this.loading = false ;
                setTimeout(
                  () => (this.showAlert = { message: '', status: true }),
                  5000
                );
              }
            });
        }

        if (result) {
          this.store.dispatch(
            shoppingCartAction.getCartByCustomerIdInit({
              customerRef: result.userId,
            })
          );

          result.isAdmin
            ? this.route.navigateByUrl('/store')
            : this.route.navigateByUrl('home-page/front-door');
        }
      });
  }
  OnDestroy() {
    this.loginInformation.unsubscribe();
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  getErrorMessageEmail() {
    if (this.email?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email?.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessagePassword() {
    if (this.password?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.password?.hasError('minlength')
      ? 'Password must be at least 8 digits'
      : '';
  }
  ngOnDestroy() {
    this.unSubscribe$.complete();
    this.unSubscribe$.next();
    this.unSubscribe$.unsubscribe();
  }
}
