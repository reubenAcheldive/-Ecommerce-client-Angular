import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/Interfaces/auth/userInformation';
import {
  initEditUserPersonalDetails,
  successEditUserPersonalDetails,
} from '../../../../../state/actions/user.actions';

import { Observable, Subscription } from 'rxjs';
import { selectAuthDetails } from 'src/app/state/selectors/auth-selectors';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private fb: FormBuilder, private store: Store) {}

  getUserDetails$: Subscription;
  userId: string;
  profileUpdateDetails: FormGroup;
  ngOnInit(): void {
    this.getUserDetails$ = this.store
      .select(selectAuthDetails)
      .subscribe((user) => {
        console.log(user);

        this.userId = user.userId;
        this.buildUpdateDetailsForm(user.firstName, user.lastName);
      });
  }

  buildUpdateDetailsForm(firstName: string, lastName: string): void {
    this.profileUpdateDetails = this.fb.group({
      firstName: new FormControl(firstName || '', [Validators.required]),
      lastName: new FormControl(lastName || '', [Validators.required]),
    });
  }

  get firstName() {
    return this.profileUpdateDetails.get('firstName');
  }
  get lastName() {
    return this.profileUpdateDetails.get('lastName');
  }

  getControlErrorMessage(control: AbstractControl) {
    if (control?.hasError('required')) {
      return 'You must enter a value';
    }
    return false;
  }

  handleSubmit() {
    const { firstName, lastName } = this.profileUpdateDetails.value;
    console.log(this.userId);

    const user = {
      _id: this.userId,
      firstName,
      lastName,
    };
    this.store.dispatch(initEditUserPersonalDetails({ user }));
  }
  ngOnDestroy() {
    this.getUserDetails$.unsubscribe();
  }
}
