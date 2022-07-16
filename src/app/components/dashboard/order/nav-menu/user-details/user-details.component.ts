import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private fb: UntypedFormBuilder, private store: Store, private route: ActivatedRoute) {}


  getUserDetails$: Subscription;
  userId: string;
  profileUpdateDetails: UntypedFormGroup;

  ngOnInit(): void {
    const user = this.route.snapshot.data['userDetails'];
    this.userId = user.userId;
    this.buildUpdateDetailsForm(user.firstName, user.lastName);
  }

  buildUpdateDetailsForm(firstName: string, lastName: string): void {
    this.profileUpdateDetails = this.fb.group({
      firstName: new UntypedFormControl(firstName || '', [Validators.required]),
      lastName: new UntypedFormControl(lastName || '', [Validators.required]),
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
  }
}
