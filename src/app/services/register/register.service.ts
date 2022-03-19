import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/InterfaceModal/user';
import { IUserInformation } from 'src/app/InterfaceModal/userInformation';

import { URL_FIRST_STEP_REGISTER, URL_STEP_TWO_REGISTER } from '../environment';
let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  readonly baseUrl = 'http://localhost:3000/api/users/register';

  isRegistered(id: string): Observable<boolean> {
    return this.http.post<boolean>(URL_FIRST_STEP_REGISTER, {
      id,
    });
  }
  fullRegister(data: Iuser): Observable<IUserInformation> {
    return this.http.post<IUserInformation>(URL_STEP_TWO_REGISTER, data, {
      headers,
    });
  }
}
