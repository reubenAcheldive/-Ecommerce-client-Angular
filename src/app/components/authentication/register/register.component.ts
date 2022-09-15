import { TogglePageService } from './../togglePage/toggle-page.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import {
  AbstractControl,
  UntypedFormBuilder,
  FormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { confirmedValidator } from './validatorsPassword/validators-password';
import { Store } from '@ngrx/store';
import { checkRegisterSuccess, registerUserInit } from 'src/app/state/actions/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit,OnDestroy {
  profileRegister: UntypedFormGroup;
  constructor(
    private fb: UntypedFormBuilder,
    private togglePageService: TogglePageService,
    private store:Store
  ) {}
  ngOnDestroy(): void {


  }
  @Input() closeDialog:()=>void;
  ngOnInit(): void {
    this.buildRegisterForm();
  }

  buildRegisterForm() {
    this.profileRegister = this.fb.group(
      {
        id: [''],
        email: [''],
        firstName: [''],
        lastName: [''],

        password: [],
        confirmPassword: [],
      },
      { validators: confirmedValidator('password', 'confirmPassword') }
    );
  }

  get f() {
    return this.profileRegister.controls;
  }
  handleSubmit() {
    if (this.f['confirmPassword'].errors) {
     return
    }
    this.store.dispatch(registerUserInit({data:this.profileRegister.value}))
  }
  goBackToLoginPage() {
    return this.togglePageService.handleWithChangeBetweenForms();
  }
}
