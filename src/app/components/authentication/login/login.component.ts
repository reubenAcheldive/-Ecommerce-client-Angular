import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Store } from '@ngrx/store';

import { loginInit } from '../../../state/actions/user.actions';
import { AuthenticationComponent } from '../authentication.component';
import { TogglePageService } from '../togglePage/toggle-page.service';
import {
  selectLoading,
  selectError,
  selectAuthDetails,
  shoppingSelectorFetcher,
} from '../../../state/selectors/auth-selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private store: Store,
    private togglePageService: TogglePageService,
    public dialogRef: MatDialogRef<AuthenticationComponent>
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

    // this.dialogRef.close();
  }
  goToRegister() {
    return this.togglePageService.handleWithChangeBetweenForms();
  }
}
