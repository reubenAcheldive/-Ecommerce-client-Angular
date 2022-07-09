import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEditUserDetails } from './../../../Interfaces/order/editUserInformation';
import { IUser } from 'src/app/Interfaces/auth/userInformation';
import { Observable } from 'rxjs';
import { EDIT_USER_PERSONAL_DETAILS } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class UserEditService {
  constructor(private http: HttpClient) {}

  editPersonalDetails({
    firstName,
    lastName,
    _id,
  }: IEditUserDetails): Observable<IUser> {
    return this.http.post<IUser>(EDIT_USER_PERSONAL_DETAILS, {
      firstName,
      lastName,
      _id,
    });
  }
}
