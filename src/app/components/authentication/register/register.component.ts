import { TogglePageService } from './../togglePage/toggle-page.service';
import { Component, OnInit } from '@angular/core';

import {
  AbstractControl,
  UntypedFormBuilder,
  FormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { confirmedValidator } from './validatorsPassword/validators-password';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  profileRegister: UntypedFormGroup;
  constructor(
    private fb: UntypedFormBuilder,
    private togglePageService: TogglePageService
  ) {}

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
      alert('error compared password');
    }
  }
  goBackToLoginPage() {
    return this.togglePageService.handleWithChangeBetweenForms();
  }
}
