import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-address-management',
  templateUrl: './address-management.component.html',
  styleUrls: ['./address-management.component.css'],
})
export class AddressManagementComponent implements OnInit {
  constructor(private fb: FormBuilder, private store: Store) {}

  profileAddressDetails: FormGroup;
  ngOnInit(): void {
      this.buildProfileAddressDetailsForm();
  }

  buildProfileAddressDetailsForm(): void {
    this.profileAddressDetails = this.fb.group({
      city: new FormControl('', [Validators.required]),
      streetAddress: new FormControl('', [Validators.required]),
      entering: new FormControl('', [Validators.required]),
      homeNumber: new FormControl('', [Validators.required]),
      departmentNumber: new FormControl('', [Validators.required]),
    });
  }

  get city() {
    return this.profileAddressDetails.get('city');
  }
  get streetAddress() {
    return this.profileAddressDetails.get('streetAddress');
  }
  get entering() {
    return this.profileAddressDetails.get('entering');
  }
  get homeNumber() {
    return this.profileAddressDetails.get('homeNumber');
  }
  get departmentNumber() {
    return this.profileAddressDetails.get('departmentNumber');
  }

  getControlErrorMessage(control: AbstractControl) {
    if (control?.hasError('required')) {
      return 'You must enter a value';
    }
    return false;
  }

  handleSubmit() {}
  ngOnDestroy() {}
}
