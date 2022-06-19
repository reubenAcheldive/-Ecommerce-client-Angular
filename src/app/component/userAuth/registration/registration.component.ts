import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';

import * as ShoppingSelectors from '../../../state/selectors/shopping-selectors';
import { Shopping } from '../../../state/reducers/index';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


import { Store } from '@ngrx/store';
import * as userRegistrationAction from '../../../state/actions/user.actions';

import * as shoppingAction from '../../../state/actions/shopping.actions';

import { Subject, Subscription, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/Interfaces/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit, OnDestroy {
  isFullRegister: boolean | null = false;
  userAuth: Subscription;
  private readonly unsubscribe$ = new Subject<void>();


  public cities = this.store.select(ShoppingSelectors.selectCities);
  isRegisterBefore: boolean = true;
  constructor(
    private fb: FormBuilder,

    private store: Store<Shopping>,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(shoppingAction.logOut());
  }

  registerForm = this.fb.group(
    {
      idCard: [
        ,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      email: ['roven1@gmail.com', [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [, [Validators.required, Validators.minLength(8)]],
      firstName: [, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lastName: [, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    },
    { validators: this.confirmedValidator('password', 'confirmPassword') }
  );



  get password() {
    return this.registerForm.get('password')?.value;
  }
  get passwordConfirmation() {
    return this.registerForm.get('confirmPassword')?.value;
  }

  confirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
  get firstStep() {
    return this.registerForm.controls;
  }
  get secondStep() {
    return this.registerForm.controls;
  }

  registerFormContinue(): void {
    console.log(this.registerForm.value);
    
    
      const { idCard, email, password, confirmPassword } =
        this.registerForm.value;
      const { city, address, firstName, lastName } = this.registerForm.value;
      const data: Iuser = {
        email: email,
        id: idCard,
        password,
        confirmPassword,
        city,
        address,
        firstName,
        lastName,
        isAdmin: false,
      };

      this.store.dispatch(userRegistrationAction.registerUserInit({ data }));

      this.store
        .select(ShoppingSelectors.selectLoginInformation)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((userAuth) => {
          if (userAuth) {
            console.log({ userAuth });

            if (userAuth) {
              this.store.dispatch(
                shoppingAction.createNewCartInit({
                  customerRef: userAuth.userId,
                })
              );
              this.route.navigate(['/store']);
            }
          }
        });
    
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
