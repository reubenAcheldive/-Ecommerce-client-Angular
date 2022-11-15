import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAddresses } from 'src/app/Interfaces/order/addresses';
import { InitEditAddress } from 'src/app/state/actions/shopping.actions';
import {
  selectAuthDetails,
  selectUserId,
} from '../../../../../state/selectors/auth-selectors';
import { exhaustMap, Subject, takeUntil } from 'rxjs';
import { selectAddress } from 'src/app/state/selectors/shopping-selectors';
@Component({
  selector: 'app-address-management',
  templateUrl: './address-management.component.html',
  styleUrls: ['./address-management.component.css'],
})
export class AddressManagementComponent implements OnInit {
  unsubscribe$ = new Subject<void>();
  constructor(private fb: UntypedFormBuilder, private store: Store) {}

  profileAddressDetails: UntypedFormGroup;

  ngOnInit(): void {
    this.store.select(selectAddress).pipe(takeUntil(this.unsubscribe$)).subscribe((payload) => {
   
      this.buildProfileAddressDetailsForm(payload);
    });
  }

  buildProfileAddressDetailsForm(payload: Partial<IAddresses>): void {
    this.profileAddressDetails = this.fb.group({
      _id: new UntypedFormControl(payload?._id),
      customerRef: new UntypedFormControl(payload?.customerRef),
      city: new UntypedFormControl(payload?.city, [Validators.required]),
      streetAddress: new UntypedFormControl(payload?.streetAddress, [
        Validators.required,
      ]),
      entering: new UntypedFormControl(payload?.entering, [Validators.required]),
      homeNumber: new UntypedFormControl(payload?.homeNumber, [Validators.required]),
      departmentNumber: new UntypedFormControl(payload?.departmentNumber, [
        Validators.required,
      ]),
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

  handleSubmit() {

  }

  ngOnDestroy(): void {
    this.unsubscribe$.complete();
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
}
