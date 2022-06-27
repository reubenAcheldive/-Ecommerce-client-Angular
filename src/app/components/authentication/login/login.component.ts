import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Store } from '@ngrx/store';

import { loginInit } from '../../../state/actions/user.actions';
import { TogglePageService } from '../togglePage/toggle-page.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private store: Store,
    private togglePageService: TogglePageService
  ) {}
  profileLogin: FormGroup;

  ngOnInit(): void {
    this.profileLogin = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  get emailError() {
    return this.profileLogin.get('email');
  }
  get passwordError() {
    return this.profileLogin.get('password');
  }
  handleSubmit() {
    if (this.emailError.errors || this.passwordError.errors) return;
    const { email, password } = this.profileLogin.value;
    this.store.dispatch(loginInit({ email, password }));
  }
  goToRegister() {
    return this.togglePageService.handleWithChangeBetweenForms();
  }
}
